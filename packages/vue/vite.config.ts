import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', '@intl-number-input/core']
      // output: {
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
    }
  },
  plugins: [dts({ rollupTypes: true })]
})
