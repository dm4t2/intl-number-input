import { defineConfig } from 'vitest/config'
import { fileURLToPath, URL } from 'url'
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }]
  },
  test: {
    coverage: {
      all: true,
      reporter: ['lcov', 'text', 'json'],
      include: ['src']
    }
  }
})
