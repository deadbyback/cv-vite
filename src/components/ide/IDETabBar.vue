<template>
  <div class="tabbar">
    <!-- Active tab -->
    <div class="tabbar__tab tabbar__tab--active">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
      </svg>
      {{ tabLabel }}
    </div>

    <div class="tabbar__spacer"></div>

    <!-- Breadcrumb -->
    <div class="tabbar__breadcrumb">
      content ›
      <span>{{ cvType }}</span> ›
      <span class="tabbar__breadcrumb--current">{{ tabLabel }}</span>
    </div>

    <!-- Raw / Preview toggle (hidden in chat mode) -->
    <div v-if="viewPanel !== 'chat'" class="tabbar__toggle">
      <button
        :class="{ active: viewPanel === 'preview' }"
        @click="viewPanel = 'preview'"
      >Preview</button>
      <button
        :class="{ active: viewPanel === 'raw' }"
        @click="viewPanel = 'raw'"
      >Raw</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { cvType, activeFile, viewPanel } from '@/composables/useCVMode'

const tabLabel = computed(() =>
  viewPanel.value === 'chat' ? 'ask.md' : activeFile.value + '.md'
)
</script>

<style scoped>
.tabbar {
  display: flex;
  align-items: center;
  background: var(--bg-tabbar);
  border-bottom: 1px solid var(--border);
  min-height: 36px;
  flex-shrink: 0;
  gap: 4px;
}

.tabbar__tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 16px;
  height: 36px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-muted);
  border-right: 1px solid var(--border);
  white-space: nowrap;
}

.tabbar__tab--active {
  background: var(--bg);
  color: var(--accent-bright);
  border-top: 1.5px solid var(--accent);
}

.tabbar__spacer { flex: 1; }

.tabbar__breadcrumb {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-dim);
  padding: 0 10px;
  white-space: nowrap;
}

.tabbar__breadcrumb span { color: var(--text-muted); }
.tabbar__breadcrumb--current { color: var(--accent) !important; }

.tabbar__toggle {
  display: flex;
  margin-right: 12px;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.tabbar__toggle button {
  font-family: var(--sans);
  font-size: 10px;
  padding: 3px 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.12s;
}

.tabbar__toggle button.active {
  background: var(--bg-active);
  color: var(--accent);
}
</style>
