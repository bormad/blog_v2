/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [react(), svgr()],
});
