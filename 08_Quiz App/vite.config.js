import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (or @vitejs/plugin-vue if using Vue)
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
