<template>
  <div class="statusbar">
    <span class="statusbar__left">Oleksandr Vanin — {{ label }}</span>
    <div class="statusbar__right">
      <button
        v-for="locale in LOCALES"
        :key="locale.code"
        class="lang-btn"
        :class="{ active: lang === locale.code }"
        @click="lang = locale.code"
      >{{ locale.flag }} {{ locale.code.toUpperCase() }}</button>
      <span>6+ yrs exp</span>
      <span>team: 10</span>
      <span>Markdown</span>
      <span>UTF-8</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { cvType, lang } from '@/composables/useCVMode'
import { LOCALES } from '@/config/locales'

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
  align-items: center;
}

.lang-btn {
  font-family: var(--mono);
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.15s;
}

.lang-btn.active {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
}

.lang-btn:hover:not(.active) {
  color: rgba(255, 255, 255, 0.85);
}
</style>
