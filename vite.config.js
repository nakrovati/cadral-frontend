import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src", "index.html"),
        404: resolve(__dirname, "src/404", "index.html"),
        "origin-url": resolve(__dirname, "src/origin-url", "index.html"),
      },
    },
  },
  publicDir: resolve(__dirname, "public"),
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/colors";',
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      Fonts: resolve(__dirname, "./src/assets/fonts"),
      Icons: resolve(__dirname, "./src/assets/icons"),
      Images: resolve(__dirname, "./src/assets/images"),
      Components: resolve(__dirname, "./src/components"),
      Services: resolve(__dirname, "./src/services"),
      Styles: resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [vue(), svgLoader()],
  server: {
    https: true,
    port: 8080,
  },
});
