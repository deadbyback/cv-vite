import { marked } from 'marked'

function escAttr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function isSafeHref(href: string): boolean {
  try {
    const protocol = new URL(href).protocol
    return protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:'
  } catch {
    return false
  }
}

marked.use({
  renderer: {
    link({ href, text }) {
      if (!href || !isSafeHref(href)) return text
      const safeHref = escAttr(href)
      const isExternal = !href.startsWith('mailto:')
      return `<a href="${safeHref}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`
    }
  }
})

export { marked }
