import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer"; // <--- 1. ADD THIS LINE

// https://vitejs.dev/config/
export default defineConfig({ // Removed ({ mode }) => for simplicity
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    visualizer({ // <--- 2. ADD THIS PLUGIN CALL
      filename: 'bundle-stats.html',
      open: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});