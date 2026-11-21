<template>
  <div class="print-root">
    <!-- Controls (hidden on actual print) -->
    <div class="print-controls no-print">
      <div class="print-controls__switch">
        <button
          :class="{ active: cvType === 'architect' }"
          @click="cvType = 'architect'"
        >Architect CV</button>
        <button
          :class="{ active: cvType === 'developer' }"
          @click="cvType = 'developer'"
        >Developer CV</button>
      </div>
      <div class="print-controls__actions">
        <button class="print-controls__back" @click="mode = 'web'">← Web view</button>
        <button class="print-controls__print" @click="window.print()">Print / Save PDF</button>
      </div>
    </div>

    <!-- The printable document -->
    <div class="print-page">
      <header class="print-header">
        <div class="print-header__name">Oleksandr Vanin</div>
        <div class="print-header__title">{{ title }}</div>
        <div class="print-header__contacts">
          <span>av.chezz@gmail.com</span>
          <span class="dot">·</span>
          <span>github.com/deadbyback</span>
          <span class="dot">·</span>
          <span>linkedin.com/in/oleksandr-vanin-2a3b56224</span>
          <span class="dot">·</span>
          <span>Kyiv, Ukraine (Remote-ready)</span>
        </div>
      </header>

      <div class="print-profile" v-html="profileText"></div>
      <div class="print-content" v-html="fullContent"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { marked } from '@/composables/useMarked'
import { mode, cvType } from '@/composables/useCVMode'

const contentModules = import.meta.glob('@/content/**/*.md', {
  query: '?raw',
  import: 'default',
})

const files = ['summary', 'experience', 'skills', 'education'] as const
const contents = ref<Record<string, string>>({})

async function loadAll() {
  for (const file of files) {
    const key = `/src/content/${cvType.value}/${file}.md`
    const loader = contentModules[key]
    if (loader) {
      contents.value[file] = (await loader()) as string
    }
  }
}

watch(cvType, loadAll, { immediate: true })

const title = computed(() =>
  cvType.value === 'architect' ? 'Software Architect' : 'Senior Backend Developer'
)

// Extract profile paragraph from summary.md (text after the --- divider, before ## Contact)
const profileText = computed(() => {
  const raw = contents.value['summary'] ?? ''
  const afterDivider = raw.split('---')[1] ?? ''
  const beforeContact = afterDivider.split('## Contact')[0] ?? afterDivider
  return marked.parse(beforeContact.trim()) as string
})

const fullContent = computed(() => {
  const sections = (['experience', 'skills', 'education'] as const)
    .map(f => contents.value[f] ?? '')
    .join('\n\n')
  return marked.parse(sections) as string
})

declare const window: Window
</script>

<style scoped>
.print-root {
  min-height: 100vh;
  background: #f3f0ff;
  font-family: var(--sans);
}

/* Controls */
.print-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: white;
  border-bottom: 1px solid var(--print-border);
  gap: 12px;
}

.print-controls__switch {
  display: flex;
  border: 1px solid var(--print-border);
  border-radius: 6px;
  overflow: hidden;
}

.print-controls__switch button {
  font-family: var(--sans);
  font-size: 12px;
  padding: 6px 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.15s;
}

.print-controls__switch button.active {
  background: #ede9fe;
  color: var(--print-accent);
  font-weight: 500;
}

.print-controls__actions {
  display: flex;
  gap: 8px;
}

.print-controls__back {
  font-size: 12px;
  padding: 6px 14px;
  background: none;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  color: #6b7280;
}

.print-controls__print {
  font-size: 12px;
  padding: 6px 16px;
  background: var(--print-accent);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-weight: 500;
}

/* Page */
.print-page {
  max-width: 800px;
  margin: 32px auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(109, 40, 217, 0.08);
  padding: 48px 56px;
}

/* Header */
.print-header {
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--print-border);
}

.print-header__name {
  font-family: var(--mono);
  font-size: 26px;
  font-weight: 500;
  color: var(--print-text);
  margin-bottom: 4px;
}

.print-header__title {
  font-size: 15px;
  color: var(--print-accent);
  font-weight: 500;
  margin-bottom: 10px;
}

.print-header__contacts {
  font-size: 11px;
  color: var(--print-text-muted);
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
}

.print-header__contacts .dot { color: var(--print-border); }

/* Profile summary */
.print-profile {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--print-border);
}

.print-profile :deep(p) {
  font-size: 11.5px;
  color: #374151;
  line-height: 1.65;
  margin-bottom: 6px;
}

/* Content */
.print-content :deep(h1) { display: none; }
.print-content :deep(h1 + hr) { display: none; } /* hide hr that follows hidden h1 */

.print-content :deep(h2) {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--print-accent);
  margin: 24px 0 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--print-border);
}

.print-content :deep(h3) {
  font-size: 13px;
  font-weight: 600;
  color: var(--print-text);
  margin: 14px 0 2px;
}

.print-content :deep(p) {
  font-size: 11.5px;
  color: #374151;
  line-height: 1.6;
  margin-bottom: 6px;
}

.print-content :deep(ul) {
  list-style: none;
  padding: 0;
  margin-bottom: 8px;
}

.print-content :deep(ul li) {
  font-size: 11.5px;
  color: #374151;
  padding-left: 14px;
  position: relative;
  line-height: 1.55;
  margin-bottom: 2px;
}

.print-content :deep(ul li::before) {
  content: '–';
  position: absolute;
  left: 1px;
  color: var(--print-accent);
}

.print-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--print-border);
  margin: 16px 0;
}

.print-content :deep(strong) {
  color: var(--print-text);
  font-weight: 600;
}

.print-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
  margin-bottom: 10px;
}

.print-content :deep(th) {
  text-align: left;
  color: var(--print-text-muted);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 8px;
  border-bottom: 1px solid var(--print-border);
}

.print-content :deep(td) {
  padding: 4px 8px;
  color: #374151;
  font-size: 11px;
  border-bottom: 1px solid #f3f4f6;
}

/* Print media — clean for PDF */
@media print {
  .no-print { display: none !important; }

  .print-root { background: white; }

  .print-page {
    margin: 0;
    padding: 32px 40px;
    box-shadow: none;
    border-radius: 0;
    max-width: 100%;
  }
}
</style>
