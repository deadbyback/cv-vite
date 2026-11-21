import { ref, watch } from 'vue'
import type { CVType, ViewMode, FileId, ViewPanel } from '@/types'
import { LOCALES, type LangCode } from '@/config/locales'

function getParam<T extends string>(key: string, fallback: T, allowed: readonly T[]): T {
  const v = new URLSearchParams(window.location.search).get(key)
  return (allowed as readonly string[]).includes(v ?? '') ? (v as T) : fallback
}

const langCodes = LOCALES.map(l => l.code) as LangCode[]

export const mode = ref<ViewMode>(getParam('mode', 'web', ['web', 'print'] as const))
export const cvType = ref<CVType>(getParam('cv', 'architect', ['architect', 'developer'] as const))
export const lang = ref<LangCode>(getParam('lang', 'en', langCodes))
export const activeFile = ref<FileId>('summary')
export const viewPanel = ref<ViewPanel>('preview')

watch([mode, cvType, lang], ([m, cv, l]) => {
  const url = new URL(window.location.href)
  url.searchParams.set('mode', m)
  url.searchParams.set('cv', cv)
  url.searchParams.set('lang', l)
  window.history.replaceState({}, '', url)
})

export function useCVMode() {
  return { mode, cvType, lang, activeFile, viewPanel }
}
