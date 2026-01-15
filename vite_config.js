import { defineConfig } from 'vite'

export default defineConfig({
  // Set base to your repository name if deploying to GitHub Pages
  base: '/ai-preview/',

  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true
  }
})
