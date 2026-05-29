import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed on Vercel at the site root, so the default base ('/') is correct.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
