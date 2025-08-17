import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/fluxdo/', // ✅ correct for GitHub Pages (repo folder name)
    plugins: [react()],
})
