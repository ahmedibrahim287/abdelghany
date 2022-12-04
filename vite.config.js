import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ahmedibrahim287.github.io/abdelghany',
  plugins: [react()],
})
