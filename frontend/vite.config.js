import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/static/",
  build: {
    manifest: true,
    outDir: "../static/frontend",
    rollupOptions: {
      input: "/src/main.js", // Your Vue entry point
    },
  },
  server: {
    origin: "http://127.0.0.1:5173",
  },
});
