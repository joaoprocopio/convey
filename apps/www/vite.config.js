import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
// import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    // visualizer(),
    tailwindcss(),
    vue(),
    vueDevTools(),
  ],
  publicDir: "./src/public",
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
