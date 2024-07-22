import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  },
  server:{
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:9090',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [vue()]
})
