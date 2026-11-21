<template>
  <div class="editor" :class="'editor--' + viewPanel">
    <div v-if="viewPanel === 'preview'" class="editor__preview" v-html="renderedMarkdown"></div>
    <div v-else class="editor__raw">
      <div
        v-for="(line, i) in rawLines"
        :key="i"
        class="raw__line"
      >
        <span class="raw__lineno">{{ i + 1 }}</span>
        <span class="raw__text" v-html="highlightLine(line)"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch, ref } from 'vue'
import { marked } from '@/composables/useMarked'
import { cvType, activeFile, viewPanel } from '@/composables/useCVMode'

// Dynamic import of all markdown files
const contentModules = import.meta.glob('@/content/**/*.md', {
  query: '?raw',
  import: 'default',
})

const rawContent = ref('')

async function loadContent() {
  const key = `/src/content/${cvType.value}/${activeFile.value}.md`
  const loader = contentModules[key]
  if (loader) {
    rawContent.value = (await loader()) as string
  } else {
    rawContent.value = `# Not found\n\nFile \`${key}\` not found.`
  }
}

watch([cvType, activeFile], loadContent, { immediate: true })

const renderedMarkdown = computed(() => marked.parse(rawContent.value) as string)

const rawLines = computed(() => rawContent.value.split('\n'))

function highlightLine(line: string): string {
  if (line.startsWith('# ')) return `<span class="tok-h1">${esc(line)}</span>`
  if (line.startsWith('## ')) return `<span class="tok-h2">${esc(line)}</span>`
  if (line.startsWith('### ')) return `<span class="tok-h3">${esc(line)}</span>`
  if (line.startsWith('---')) return `<span class="tok-sep">${esc(line)}</span>`
  if (line.startsWith('- ') || line.startsWith('* ')) return highlightListItem(line)
  if (line.startsWith('**') && line.endsWith('**')) return `<span class="tok-bold">${esc(line)}</span>`
  return escWithInline(line)
}

function highlightListItem(line: string): string {
  const prefix = `<span class="tok-bullet">${esc(line.slice(0, 2))}</span>`
  return prefix + escWithInline(line.slice(2))
}

function escWithInline(line: string): string {
  return esc(line)
    .replace(/\*\*(.+?)\*\*/g, '<span class="tok-bold">**$1**</span>')
    .replace(/`(.+?)`/g, '<span class="tok-code">`$1`</span>')
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
</script>

<style scoped>
.editor {
  flex: 1;
  overflow-y: auto;
  font-family: var(--mono);
}

/* Preview styles */
.editor__preview {
  padding: 24px 32px;
  font-family: var(--sans);
  max-width: 760px;
}

.editor__preview :deep(h1) {
  font-size: 20px;
  font-weight: 600;
  color: var(--accent-bright);
  margin-bottom: 4px;
  font-family: var(--mono);
}

.editor__preview :deep(h2) {
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  margin: 20px 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.editor__preview :deep(h3) {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-primary);
  margin: 10px 0 2px;
}

.editor__preview :deep(p) {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 8px;
}

.editor__preview :deep(ul) {
  list-style: none;
  padding: 0;
  margin-bottom: 8px;
}

.editor__preview :deep(ul li) {
  font-size: 12px;
  color: var(--text-secondary);
  padding-left: 14px;
  position: relative;
  line-height: 1.6;
  margin-bottom: 3px;
}

.editor__preview :deep(ul li::before) {
  content: '›';
  position: absolute;
  left: 2px;
  color: var(--accent);
}

.editor__preview :deep(hr) {
  border: none;
  border-top: 1px solid var(--border);
  margin: 16px 0;
}

.editor__preview :deep(strong) {
  color: var(--text-primary);
  font-weight: 500;
}

.editor__preview :deep(code) {
  font-family: var(--mono);
  font-size: 11px;
  background: var(--bg-active);
  color: var(--accent);
  padding: 1px 5px;
  border-radius: 3px;
}

.editor__preview :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
  margin-bottom: 10px;
}

.editor__preview :deep(th) {
  text-align: left;
  color: var(--text-muted);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 8px;
  border-bottom: 1px solid var(--border);
}

.editor__preview :deep(td) {
  padding: 5px 8px;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-light);
}

.editor__preview :deep(a) {
  color: var(--accent);
  text-decoration: none;
}

.editor__preview :deep(a:hover) { text-decoration: underline; }

/* Raw mode */
.editor__raw {
  padding: 16px 0;
  font-size: 12px;
  line-height: 1.6;
  counter-reset: line;
}

.raw__line {
  display: flex;
  align-items: baseline;
  gap: 0;
  min-height: 1.6em;
  padding-right: 24px;
}

.raw__lineno {
  width: 48px;
  flex-shrink: 0;
  text-align: right;
  color: var(--text-dim);
  font-size: 11px;
  user-select: none;
  padding-right: 16px;
}

.raw__text { color: var(--text-secondary); }

.raw__text :deep(.tok-h1) { color: var(--accent-bright); font-weight: 500; }
.raw__text :deep(.tok-h2) { color: var(--accent); }
.raw__text :deep(.tok-h3) { color: #93c5fd; }
.raw__text :deep(.tok-sep) { color: var(--text-dim); }
.raw__text :deep(.tok-bullet) { color: var(--accent); }
.raw__text :deep(.tok-bold) { color: var(--text-primary); }
.raw__text :deep(.tok-code) { color: #86efac; }
</style>
