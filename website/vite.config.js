import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** /path → /path/ so index.html is found (avoids 404). */
function trailingSlashRedirects(paths) {
  return {
    name: 'trailing-slash-redirects',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathOnly = req.url?.split('?')[0] ?? ''
        if (paths.includes(pathOnly)) {
          res.statusCode = 302
          res.setHeader('Location', `${pathOnly}/`)
          res.end()
          return
        }
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathOnly = req.url?.split('?')[0] ?? ''
        if (paths.includes(pathOnly)) {
          res.statusCode = 302
          res.setHeader('Location', `${pathOnly}/`)
          res.end()
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), trailingSlashRedirects(['/static-site', '/html'])],
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
      '/uploads': 'http://localhost:4000',
    },
  },
})
