
import type MarkdownIt from 'markdown-it'

export function scratchblocksPlugin(md: MarkdownIt) {
    const defaultFence =
        md.renderer.rules.fence ??
        ((tokens, idx, options, env, self) =>
            self.renderToken(tokens, idx, options))

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]

        const language = token.info.trim().split(/\s+/)[0]

        if (language !== 'scratchblocks') {
            return defaultFence(tokens, idx, options, env, self)
        }

        const code = encodeURIComponent(token.content.replace(/\n$/, ''))

        return `<ScratchBlocks code="${code}" />`
    }
}
