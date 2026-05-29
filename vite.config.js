import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed as a GitHub Pages project site at https://charlesdev-s.github.io/Portfolio/
// so all built asset URLs must be prefixed with the repo name.
// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
