import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    vuetify({
      autoImport: true
    })
  ],
  resolve: {
    alias: {
      '@intl-number-input/core': path.resolve(__dirname, '../../packages/core/src'),
      '@intl-number-input/vue': path.resolve(__dirname, '../../packages/vue/src')
    }
  }
})
