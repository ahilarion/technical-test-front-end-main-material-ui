import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/technical-test-front-end-main-material-ui/',
  publicDir: 'public',
  build: {
    assetsDir: 'assets', 
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]' 
      }
    }
  }
})
