import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/renderer.ts"),
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
