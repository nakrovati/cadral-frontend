import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
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
      Configs: resolve(__dirname, "./src/configs"),
      Router: resolve(__dirname, "./src/router"),
      Services: resolve(__dirname, "./src/services"),
      Styles: resolve(__dirname, "./src/styles"),
      Views: resolve(__dirname, "./src/views"),
    },
  },
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./src/locales/**"),
    }),
    svgLoader(),
  ],
  server: {
    https: true,
    port: 8080,
  },
});
