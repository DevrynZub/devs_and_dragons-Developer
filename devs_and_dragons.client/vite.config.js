import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs',
    sourcemap: false,
    rollupOptions: {
      external: ['/src/assets/img/DnD_Logo2-removebg-preview.png'],
    },
  },
  server: {
    port: 8080
  }
})
