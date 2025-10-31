import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",   // WAJIB, karena deploy di root domain
  build: {
    outDir: "dist",
  }
});
