<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  code: { type: String, required: true }
})

const svgRef = ref(null)
let markmap
let onResize

function decode(code) {
  const binary = atob(code)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

onMounted(async () => {
  const [{ Transformer }, { Markmap }] = await Promise.all([
    import('markmap-lib'),
    import('markmap-view')
  ])
  const { root } = new Transformer().transform(decode(props.code))
  markmap = Markmap.create(svgRef.value, { autoFit: true, duration: 0 }, root)
  onResize = () => markmap?.fit()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  if (onResize) window.removeEventListener('resize', onResize)
  markmap?.destroy()
})
</script>

<template>
  <svg ref="svgRef" class="markmap" role="img" aria-label="Mapa mental"></svg>
</template>
