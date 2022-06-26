import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import svgLoader from "vite-svg-loader";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      manualChunks: {
        "vendor.vue": ["node_modules/vue/dist/vue.esm-bundler.js"],
        "vendor.vue-i18n": ["node_modules/vue-i18n/index.js"],
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/colors";',
      },
    },
  },
  resolve: {
    alias: {
      Fonts: resolve(__dirname, "./src/assets/fonts"),
      Icons: resolve(__dirname, "./src/assets/icons"),
      Images: resolve(__dirname, "./src/assets/images"),
      Components: resolve(__dirname, "./src/components"),
      Configs: resolve(__dirname, "./src/configs"),
      Helpers: resolve(__dirname, "./src/helpers"),
      Router: resolve(__dirname, "./src/router"),
      Services: resolve(__dirname, "./src/services"),
      Styles: resolve(__dirname, "./src/styles"),
      Views: resolve(__dirname, "./src/views"),
      "@": resolve(__dirname, "./src"),
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
