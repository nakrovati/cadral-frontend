import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/colors";',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      Fonts: path.resolve(__dirname, "./src/assets/fonts"),
      Icons: path.resolve(__dirname, "./src/assets/icons"),
      Images: path.resolve(__dirname, "./src/assets/images"),
      Components: path.resolve(__dirname, "./src/components"),
      Styles: path.resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [vue()],
});
