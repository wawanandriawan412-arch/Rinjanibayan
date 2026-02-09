import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // Penting agar Cloudflare bisa menemukan aset dengan jalur relatif
      base: './', 
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // PERBAIKAN: Alias diarahkan ke root '.' karena index.tsx/App.tsx ada di luar
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist', // Lokasi hasil build untuk Cloudflare Pages
        assetsDir: 'assets',
        emptyOutDir: true,
      }
    };
});