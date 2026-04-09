import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** /static-site → /static-site/ so index.html is found (avoids 404). */
function staticSiteTrailingSlash() {
  return {
    name: 'static-site-trailing-slash',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathOnly = req.url?.split('?')[0] ?? ''
        if (pathOnly === '/static-site') {
          res.statusCode = 302
          res.setHeader('Location', '/static-site/')
          res.end()
          return
        }
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathOnly = req.url?.split('?')[0] ?? ''
        if (pathOnly === '/static-site') {
          res.statusCode = 302
          res.setHeader('Location', '/static-site/')
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
  plugins: [react(), staticSiteTrailingSlash()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
      '/uploads': 'http://localhost:4000',
    },
  },
})
