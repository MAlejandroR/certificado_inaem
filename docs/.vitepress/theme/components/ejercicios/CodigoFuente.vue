<script setup>
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const props = defineProps({
  codigo: {
    type: String,
    required: true
  }
})

const html = ref('')

watch(
    () => props.codigo,
    async (codigo) => {
      html.value = await codeToHtml(codigo, {
        lang: 'php',
        theme: 'github-dark'
      })
    },
    { immediate: true }
)
</script>

<template>
  <div class="codigo-fuente" v-html="html"></div>
</template>

<style scoped>
.codigo-fuente {
  border-radius: 8px;
  overflow: hidden;
}

.codigo-fuente :deep(pre) {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>