import { createApp } from "vue";
import App from "@/App.vue";
import "Styles/style.scss";
import i18n from "Configs/i18n";

createApp(App).use(i18n).mount("#app");
