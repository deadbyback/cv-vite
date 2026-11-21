import { marked } from 'marked'

marked.use({
  renderer: {
    link({ href, text }) {
      const isExternal = href && !href.startsWith('mailto:')
      return `<a href="${href}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`
    }
  }
})

export { marked }
