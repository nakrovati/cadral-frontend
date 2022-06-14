import { createApp } from "vue";
import App from "@/App.vue";
import router from "Router/index.js";
import i18n from "Configs/i18n";
import "Styles/style.scss";

createApp(App).use(router).use(i18n).mount("#app");
