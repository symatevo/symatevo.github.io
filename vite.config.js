import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a user site named `symatevo.github.io`, keep base: '/'.
// If you use a project repo (e.g., `portfolio`), change base to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
