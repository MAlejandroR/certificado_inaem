<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  code: string
}>()

const container = ref<HTMLElement | null>(null)
const rendered = ref(false)

const source = computed(() => {
  try {
    return decodeURIComponent(props.code)
  } catch {
    return props.code
  }
})

type ScratchApi = {
  appendStyles: () => void
  loadLanguages: (languages: Record<string, unknown>) => void
  parse: (code: string, options: { languages: string[] }) => unknown
  render: (doc: unknown, options: { style: string; scale: number }) => SVGElement
}

let apiPromise: Promise<ScratchApi> | null = null

function getApi() {
  if (!apiPromise) {
    apiPromise = (async () => {
      const { default: scratchblocks } = await import('scratchblocks')
      const { default: es } = await import('scratchblocks/locales/es.json')
      const api = (
        typeof scratchblocks === 'function'
          ? scratchblocks(window)
          : scratchblocks
      ) as ScratchApi
      if (typeof scratchblocks === 'function') api.appendStyles()
      api.loadLanguages({ es })
      return api
    })()
  }
  return apiPromise
}

async function renderBlocks() {
  if (!container.value) return

  const api = await getApi()
  await nextTick()
  if (!container.value) return

  const doc = api.parse(source.value, { languages: ['es', 'en'] })
  const svg = api.render(doc, { style: 'scratch3', scale: 1 })
  container.value.replaceChildren(svg)
  rendered.value = true
}

onMounted(renderBlocks)

watch(source, async () => {
  rendered.value = false
  await nextTick()
  renderBlocks()
})
</script>

<template>
  <div
      ref="container"
      class="scratchblocks-container"
  >
    <pre v-if="!rendered" class="scratchblocks-fallback">{{ source }}</pre>
  </div>
</template>

<style>
.scratchblocks-container {
  margin: 1rem 0;
  overflow-x: auto;
}

.scratchblocks-container svg {
  max-width: 100%;
  height: auto;
}

.scratchblocks-fallback {
  white-space: pre;
}
</style>
