<template>
  <IDELayout v-if="mode === 'web'" />
  <PrintLayout v-else />
</template>

<script lang="ts" setup>
import { mode } from '@/composables/useCVMode'
import IDELayout from '@/components/ide/IDELayout.vue'
import PrintLayout from '@/components/print/PrintLayout.vue'
</script>
