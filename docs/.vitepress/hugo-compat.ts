import fs from 'node:fs'
import path from 'node:path'

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'])

type MarkdownRenderer = {
  render: (src: string, env?: Record<string, unknown>) => string
  renderInline: (src: string, env?: Record<string, unknown>) => string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function safeClasses(value: string | undefined, fallback: string) {
  const classes = (value || fallback)
    .trim()
    .split(/\s+/)
    .filter((part) => /^[a-z0-9-]+$/i.test(part))
  return classes.length ? classes.join(' ') : fallback
}

function parseArgs(raw: string) {
  const named: Record<string, string> = {}
  const withoutNamed = raw.replace(/(\w+)\s*=\s*"([^"]*)"/g, (_, key: string, value: string) => {
    named[key.toLowerCase()] = value
    return ' '
  })
  const positional: string[] = []
  const re = /"([^"]*)"|(\S+)/g
  let match: RegExpExecArray | null
  while ((match = re.exec(withoutNamed))) positional.push(match[1] ?? match[2])
  return { named, positional }
}

function isCommentLine(src: string, index: number) {
  const lineStart = src.lastIndexOf('\n', index - 1) + 1
  return src.slice(lineStart, index).trimStart().startsWith('[//]:')
}

function replaceExceptComments(src: string, regex: RegExp, replacer: (match: RegExpExecArray) => string) {
  regex.lastIndex = 0
  let out = ''
  let cursor = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(src))) {
    if (isCommentLine(src, match.index)) {
      regex.lastIndex = match.index + match[0].length
      continue
    }
    out += src.slice(cursor, match.index) + replacer(match)
    cursor = match.index + match[0].length
  }
  return out + src.slice(cursor)
}

function resolveImage(dir: string, name: string) {
  let files: string[] = []
  try {
    files = fs.readdirSync(dir)
  } catch {
    return null
  }
  const images = files.filter((file) => IMAGE_EXT.has(path.extname(file).toLowerCase()))
  const wanted = name.toLowerCase()
  const wantedBase = wanted.replace(/\.[a-z0-9]+$/, '')
  const exact = images.find((file) => {
    const lower = file.toLowerCase()
    return lower === wanted || lower.replace(/\.[^.]+$/, '') === wantedBase
  })
  if (exact) return `./${exact}`
  const prefixed = images.find((file) => file.toLowerCase().replace(/\.[^.]+$/, '').startsWith(wantedBase))
  return prefixed ? `./${prefixed}` : null
}

function escapeMustaches(html: string) {
  return html.replace(/\{\{/g, '&#123;&#123;').replace(/\}\}/g, '&#125;&#125;')
}

/**
 * Hugo shortcodes and ```markmap fences break the VitePress build:
 * `{{ }}` is Vue template syntax, and Shiki has no `markmap` language.
 * This plugin turns those constructs into HTML before the Vue compiler sees them.
 */
export function hugoCompatPlugin(md: MarkdownRenderer) {
  const render = md.render.bind(md)
  const renderInline = md.renderInline.bind(md)

  md.render = (src, env = {}) => {
    const blocks: string[] = []
    const stash = (html: string) => {
      const token = `HUGOTOKEN${blocks.length}END`
      blocks.push(html)
      return token
    }
    const block = (html: string) => `\n\n${stash(html)}\n\n`
    const inline = (html: string) => stash(html)
    const pageDir = typeof env.path === 'string' ? path.dirname(env.path) : ''

    let next = src.replace(/```markmap[^\n]*\n([\s\S]*?)```/g, (_, content: string) => {
      const code = Buffer.from(content.trim(), 'utf8').toString('base64')
      return block(`<Markmap code="${code}" />`)
    })

    next = replaceExceptComments(next, /\{\{<\s*color\b([^>]*)>\}\}([\s\S]*?)\{\{<\s*\/\s*color\s*>\}\}/g, (match) => {
      const { named } = parseArgs(match[1] || '')
      const body = match[2].trim()
      const html = body.includes('\n') ? render(body, {}).trim() : renderInline(body, {})
      return inline(`<span class="hugo-color ${safeClasses(named.color, 'text-warning')}">${html}</span>`)
    })

    next = replaceExceptComments(next, /\{\{<\s*imgproc\b([^>]*)>\}\}([\s\S]*?)\{\{<\s*\/\s*imgproc\s*>\}\}/g, (match) => {
      const { positional } = parseArgs(match[1] || '')
      const name = positional[0] || ''
      const caption = match[2].trim()
      const srcUrl = name && pageDir ? resolveImage(pageDir, name) : null
      const captionHtml = caption ? renderInline(caption, {}) : ''
      const image = srcUrl
        ? `<img src="${escapeHtml(srcUrl)}" alt="${escapeHtml(caption.replace(/\s+/g, ' '))}" />`
        : ''
      const figcaption = captionHtml ? `<figcaption>${captionHtml}</figcaption>` : ''
      return block(`<figure class="imgproc">${image}${figcaption}</figure>`)
    })

    next = replaceExceptComments(next, /\{\{[<%]\s*line\b[^>%]*[>%]\}\}/g, () => block('<hr class="hugo-line" />'))

    next = replaceExceptComments(next, /\{\{<\s*objetivos\b([^>]*)>\}\}([\s\S]*?)\{\{<\s*\/\s*objetivos\s*>\}\}/g, (match) => {
      const { named } = parseArgs(match[1] || '')
      const title = (named.title || 'Objetivos').trim()
      const subtitle = (named.sub_title || 'Qué veremos aquí').trim()
      const items = match[2]
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join('')
      return block(
        `<div class="hugo-objetivos"><div class="hugo-objetivos-title"><i class="fas fa-check-circle" aria-hidden="true"></i> ${escapeHtml(title)}</div><div class="hugo-objetivos-sub">${escapeHtml(subtitle)}</div><ul>${items}</ul></div>`
      )
    })

    const renderAlert = (args: string, body: string) => {
      const { named } = parseArgs(args)
      const color = safeClasses(named.color, 'warning').split(' ')[0]
      const title = (named.title || '').trim()
      const inner = render(body.trim(), {}).trim()
      const heading = title ? `<div class="hugo-alert-title">${escapeHtml(title)}</div>` : ''
      return block(`<div class="hugo-alert hugo-alert-${color}">${heading}${inner}</div>`)
    }

    next = replaceExceptComments(next, /\{\{<\s*alert\b([^>]*)>\}\}([\s\S]*?)\{\{<\s*\/\s*alert\s*>\}\}/g, (match) => renderAlert(match[1] || '', match[2]))
    next = replaceExceptComments(next, /\{\{%\s*alert\b([^%]*)%\}\}([\s\S]*?)\{\{%\s*\/\s*alert\s*%\}\}/g, (match) => renderAlert(match[1] || '', match[2]))

    next = replaceExceptComments(next, /\{\{%\s*pageinfo\s*%\}\}([\s\S]*?)\{\{%\s*\/\s*pageinfo\s*%\}\}/g, (match) => {
      const inner = render(match[1].trim(), {}).trim()
      return block(`<div class="hugo-pageinfo">${inner}</div>`)
    })

    let html = render(next, env)
    for (let guard = 0; html.includes('HUGOTOKEN') && guard < 8; guard++) {
      html = html.replace(/<p>\s*(HUGOTOKEN\d+END)\s*<\/p>/g, '$1')
      html = html.replace(/HUGOTOKEN(\d+)END/g, (_, id: string) => blocks[Number(id)] ?? '')
    }
    return escapeMustaches(html)
  }
}
