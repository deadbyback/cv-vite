<template>
  <div class="sidebar">
    <div class="sidebar__header">CV Explorer</div>

    <!-- CV type switch -->
    <div class="cv-switch">
      <button
        :class="{ active: cvType === 'architect' }"
        @click="cvType = 'architect'; activeFile = 'summary'"
      >Architect</button>
      <button
        :class="{ active: cvType === 'developer' }"
        @click="cvType = 'developer'; activeFile = 'summary'"
      >Developer</button>
    </div>

    <!-- File tree -->
    <div class="tree">
      <div class="tree__folder">
        <span class="tree__folder-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
          </svg>
          content / {{ cvType }}
        </span>
        <div class="tree__files">
          <button
            v-for="file in files"
            :key="file.id"
            class="tree__file"
            :class="{ active: activeFile === file.id && viewPanel !== 'chat' }"
            @click="openFile(file.id)"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" class="tree__file-icon" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
            </svg>
            {{ file.label }}
          </button>
        </div>
      </div>

      <!-- Chat entry -->
      <button
        class="tree__file tree__file--chat"
        :class="{ active: viewPanel === 'chat' }"
        @click="viewPanel = 'chat'"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" class="tree__file-icon" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
        ask.md
        <span class="tree__file-badge">AI Q&amp;A</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cvType, activeFile, viewPanel } from '@/composables/useCVMode'
import type { FileId } from '@/types'

const files = [
  { id: 'summary' as FileId, label: 'summary.md' },
  { id: 'experience' as FileId, label: 'experience.md' },
  { id: 'skills' as FileId, label: 'skills.md' },
  { id: 'education' as FileId, label: 'education.md' },
]

function openFile(id: FileId) {
  activeFile.value = id
  if (viewPanel.value === 'chat') viewPanel.value = 'preview'
}
</script>

<style scoped>
.sidebar {
  width: 210px;
  background: var(--bg-sidebar);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
}

.sidebar__header {
  padding: 10px 14px 6px;
  font-size: 9px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.cv-switch {
  display: flex;
  margin: 0 8px 8px;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.cv-switch button {
  flex: 1;
  font-family: var(--sans);
  font-size: 10px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.15s;
}

.cv-switch button.active {
  background: var(--bg-active);
  color: var(--accent);
}

.tree {
  padding: 0 6px;
}

.tree__folder-label {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  font-size: 10px;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.tree__files {
  padding-left: 10px;
}

.tree__file {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 4px 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-muted);
  border-radius: 3px;
  text-align: left;
  transition: all 0.12s;
  margin-bottom: 1px;
}

.tree__file:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.tree__file.active {
  background: var(--bg-active);
  color: var(--accent-bright);
}

.tree__file-icon {
  opacity: 0.6;
  color: var(--accent);
  flex-shrink: 0;
}

.tree__file.active .tree__file-icon {
  opacity: 1;
}

.tree__file--chat {
  margin-top: 10px;
  color: var(--text-muted);
}

.tree__file--chat.active {
  color: var(--accent-bright);
}

.tree__file-badge {
  font-size: 8px;
  padding: 1px 5px;
  background: var(--bg-active);
  color: var(--accent);
  border-radius: 10px;
  margin-left: auto;
  white-space: nowrap;
}
</style>
