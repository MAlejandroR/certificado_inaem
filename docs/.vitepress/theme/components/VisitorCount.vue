<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchVisitCount, goatCounter } from '../../site'
import ContadorComun from '../../../../../arquitectura/comun/theme/components/VisitorCount.vue'

const total = ref<string | number | null>(__DAWS_VISIT_COUNT__)

onMounted(async () => {
  const live = await fetchVisitCount()
  if (live) total.value = live
  else if (!total.value) total.value = '—'
})
</script>

<template>
  <ContadorComun :total="total" :visible="!!goatCounter" />
</template>
