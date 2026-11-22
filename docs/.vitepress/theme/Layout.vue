
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import CollapsibleHeading from '../../../../arquitectura/comun/theme/components/CollapsibleHeading.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- Plegado automático de títulos -->
    <template #doc-after>
      <CollapsibleHeading />
    </template>
  </Layout>
</template>
