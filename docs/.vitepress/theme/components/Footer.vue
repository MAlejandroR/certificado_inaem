<script setup>
import FooterComun from '../../../../../arquitectura/comun/theme/components/Footer.vue'
import VisitorCount from './VisitorCount.vue'
</script>

<template>
  <FooterComun>
    <template #extra>
      <VisitorCount />
    </template>
  </FooterComun>
</template>
