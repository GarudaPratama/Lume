import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // biar semua asset path di index.html benar
  build: {
    outDir: "dist", // folder hasil build
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // pastikan main index.html
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // alias src supaya import lebih gampang
    },
  },
});
