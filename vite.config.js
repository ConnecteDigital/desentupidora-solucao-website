import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 443, // Use 443 para HTTPS em ambientes de proxy
    },
    cors: true, // Permitir CORS para qualquer origem
    fs: {
      strict: false,
    },
    allowedHosts: ['3000-i62hyqsyppor6yl4qlapk-990eabcf.manusvm.computer'],
  },
})