import { defineConfig } from 'vite'

export default defineConfig({
  base: '/solar-system-simulation/',
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,ts}', 'tests/**/*.{test,spec}.{js,ts}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.js'],
      exclude: [
        'src/main.js',
        'src/components/AudioSystem.js',
        'src/audio/**',
        'node_modules/**'
      ]
    }
  }
})
