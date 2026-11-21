<template>
  <div class="statusbar">
    <span class="statusbar__left">Oleksandr Vanin — {{ label }}</span>
    <div class="statusbar__right">
      <span>🇺🇦 Ukrainian</span>
      <span>6+ yrs exp</span>
      <span>team: 10</span>
      <span>Markdown</span>
      <span>UTF-8</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { cvType } from '@/composables/useCVMode'

const label = computed(() =>
  cvType.value === 'architect' ? 'Software Architect' : 'Senior Backend Developer'
)
</script>

<style scoped>
.statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  background: var(--accent-status);
  padding: 0 14px;
  flex-shrink: 0;
}

.statusbar__left,
.statusbar__right {
  font-family: var(--mono);
  font-size: 10px;
  color: rgba(255, 255, 255, 0.85);
}

.statusbar__right {
  display: flex;
  gap: 16px;
}
</style>
