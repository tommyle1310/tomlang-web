import path from "path"
import react from "@vitejs/plugin-react"
import polyfillNode from 'rollup-plugin-polyfill-node';
import { defineConfig } from "vite"

export default defineConfig({
  define: {
    global: {}
  },
  plugins: [react(), polyfillNode(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        polyfillNode(),
      ],
    },
  },

})
