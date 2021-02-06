import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': '/src/',
  },
  plugins: [vue()],
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'https://vue-project-template.vercel.app/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
