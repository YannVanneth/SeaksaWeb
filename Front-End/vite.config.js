import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  outDir: 'public',
  server: {
    port: 3000, // Change Vite development server port to 3000
  },
});
