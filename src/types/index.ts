export type CVType = 'architect' | 'developer'
export type ViewMode = 'web' | 'print'
export type FileId = 'summary' | 'experience' | 'skills' | 'education'
export type ViewPanel = 'raw' | 'preview' | 'chat'

export interface FileNode {
  id: FileId
  label: string
}

export interface QAItem {
  id: string
  question: string
  answer: string
  cv: CVType | 'both'
}
