import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'https://29-11-2022-express.vercel.app',
    viewportWidth: 1920,
    viewportHeight: 1080
  }
})
