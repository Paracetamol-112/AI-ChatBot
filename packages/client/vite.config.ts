import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'

      // The above mean that when you send the request to /api/hello
      // it will automatically forward to http://localhost:3000/api/hello
    }
  }
})
