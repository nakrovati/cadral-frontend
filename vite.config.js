import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      manualChunks: {
        "vendor.vue": ["node_modules/vue/dist/vue.esm-bundler.js"],
        "vendor.vue-i18n": [
          "node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js",
        ],
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
  define: {
    __VUE_I18N_LEGACY_API__: false,
  },
  resolve: {
    alias: {
      Assets: resolve("./src/assets"),
      Components: resolve("./src/components"),
      Configs: resolve("./src/configs"),
      Helpers: resolve("./src/helpers"),
      Locales: resolve("./src/locales"),
      Router: resolve("./src/router"),
      Services: resolve("./src/services"),
      Styles: resolve("./src/styles"),
      Views: resolve("./src/views"),
      "@": resolve("./src"),
    },
  },
  plugins: [vue(), svgLoader()],
});
