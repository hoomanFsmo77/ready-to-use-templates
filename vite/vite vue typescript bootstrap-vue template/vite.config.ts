import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  envPrefix:'APP',
  build:{
    outDir:'build',
    target:'es2015'
  },
  server:{
    port:3000
  }
})
