<template>
  <div class="ide">
    <!-- Title bar -->
    <div class="ide__titlebar">
      <div class="ide__dots" aria-hidden="true">
        <span class="dot dot--red"></span>
        <span class="dot dot--yellow"></span>
        <span class="dot dot--green"></span>
      </div>
      <span class="ide__title">cv-vite — Oleksandr Vanin</span>
      <div class="ide__mode-switch">
        <button
          :class="{ active: mode === 'web' }"
          @click="mode = 'web'"
        >Web</button>
        <button
          :class="{ active: mode === 'print' }"
          @click="mode = 'print'"
        >Print</button>
      </div>
    </div>

    <!-- Body: sidebar + editor -->
    <div class="ide__body">
      <IDESidebar />
      <div class="ide__main">
        <IDETabBar />
        <div class="ide__content">
          <IDEChat v-if="viewPanel === 'chat'" />
          <IDEEditor v-else />
        </div>
      </div>
    </div>

    <!-- Status bar -->
    <IDEStatusBar />
  </div>
</template>

<script lang="ts" setup>
import { mode, viewPanel } from '@/composables/useCVMode'
import IDESidebar from './IDESidebar.vue'
import IDETabBar from './IDETabBar.vue'
import IDEEditor from './IDEEditor.vue'
import IDEChat from './IDEChat.vue'
import IDEStatusBar from './IDEStatusBar.vue'
</script>

<style scoped>
.ide {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  background: var(--bg);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

/* Title bar */
.ide__titlebar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  height: 32px;
  background: #060612;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.ide__dots {
  display: flex;
  gap: 6px;
  align-items: center;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.dot--red { background: #ff5f57; }
.dot--yellow { background: #febc2e; }
.dot--green { background: #28c840; }

.ide__title {
  flex: 1;
  text-align: center;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-muted);
}

.ide__mode-switch {
  display: flex;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.ide__mode-switch button {
  font-family: var(--sans);
  font-size: 10px;
  padding: 2px 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.15s;
}

.ide__mode-switch button.active {
  background: var(--bg-active);
  color: var(--accent);
}

/* Body */
.ide__body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.ide__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ide__content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
