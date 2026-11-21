import { ref, watch } from 'vue'
import type { CVType, ViewMode, FileId, ViewPanel } from '@/types'

function getParam<T extends string>(key: string, fallback: T): T {
  return (new URLSearchParams(window.location.search).get(key) as T) ?? fallback
}

export const mode = ref<ViewMode>(getParam('mode', 'web'))
export const cvType = ref<CVType>(getParam('cv', 'architect'))
export const activeFile = ref<FileId>('summary')
export const viewPanel = ref<ViewPanel>('preview')

watch([mode, cvType], ([m, cv]) => {
  const url = new URL(window.location.href)
  url.searchParams.set('mode', m)
  url.searchParams.set('cv', cv)
  window.history.replaceState({}, '', url)
})

export function useCVMode() {
  return { mode, cvType, activeFile, viewPanel }
}
