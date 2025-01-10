import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: "/static/",
  build: {
    manifest: true,
    outDir: "../static/frontend",
    rollupOptions: {
      // input: "/src/main.js", // Your Vue entry point
      input: {
        main: "/src/main.js",
        django: "/src/django.css" // New entry point for Django styles
      },

    },
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  server: {
    origin: "http://127.0.0.1:5173",
  },
  css: {
    postcss: '../postcss.config.js',
  }
});
