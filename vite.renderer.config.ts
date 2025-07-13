import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  // input ko‘rsatish shart emas, lekin xohlasa 👇
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/renderer.ts"),
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
