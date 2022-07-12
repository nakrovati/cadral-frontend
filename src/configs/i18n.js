import { createI18n } from "vue-i18n";
import EN from "Locales/en-US.json";
import RU from "Locales/ru-RU.json";

const messages = {
  ...EN,
  ...RU,
};

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "ru-RU",
  messages,
});

export default i18n;
