// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Example PostCSS configuration for Tailwind CSS
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    assetsInlineLimit: 0, // Set to 0 to allow importing font files
  },
});