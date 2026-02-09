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
      // Menggunakan base relatif agar file CSS/JS ditemukan di mana pun folder deploy-nya
      base: './', 
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // Mengubah alias ke folder 'src' biasanya lebih standar untuk proyek Vite
          '@': path.resolve(__dirname, './src'),
        }
      },
      build: {
        // Memastikan output masuk ke folder 'dist'
        outDir: 'dist',
        // Menghindari masalah MIME type dengan memastikan aset diproses dengan benar
        assetsDir: 'assets',
      }
    };
});