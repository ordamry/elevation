import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/elevation/Quick-Notes-Project/quick-notes-project/',
})
