<template>
  <div class="modal__wrapper">
    <h3 class="modal__title">{{ t("originUrl.modal.title") }}</h3>
    <input
      class="modal__input"
      type="text"
      placeholder="example.com"
      v-model="searchUrl"
      v-bind:class="{ error: hasUrlEmptyError || hasUrlIncorrectError }"
    />
    <div class="modal__error" v-if="hasUrlEmptyError">
      {{ t("originUrl.modal.errors.searchUrlIsEmpty") }}
    </div>
    <div class="modal__error" v-else-if="hasUrlIncorrectError">
      {{ t("originUrl.modal.errors.searchUrlIsIncorrect") }}
    </div>
    <button class="modal__button-find" @click="findOriginSite">
      {{ t("originUrl.modal.buttonFind") }}
    </button>
    <button class="modal__button-close" @click="emit('close')">
      {{ t("originUrl.modal.buttonClose") }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import router from "Router";

const searchUrl = ref(),
  hasUrlEmptyError = ref(false),
  hasUrlIncorrectError = ref(false);

const emit = defineEmits(["close"]);
const { t } = useI18n();

const siteRegex = import.meta.env.PROD
  ? /^(?:https?:\/\/)?(?:www\.)?cadral\.fun\/(\w{7})[+]?$/
  : /^(?:https?:\/\/)?(?:www\.)?localhost\:3000\/(\w{7})[+]?$/;

function findOriginSite() {
  hasUrlEmptyError.value = false;
  hasUrlIncorrectError.value = false;

  if (!searchUrl.value) {
    hasUrlEmptyError.value = true;
    return false;
  }

  const regexMatchesArray = searchUrl.value.match(siteRegex);

  if (!regexMatchesArray) {
    hasUrlIncorrectError.value = true;
    return false;
  }

  router
    .push({
      name: "OriginUrl",
      params: { shortUrl: regexMatchesArray[1].concat("+") },
    })
    .then(() => emit("close"));
}
</script>

<style lang="scss" scoped>
.modal__wrapper {
  box-shadow: 0 0 5px rgba(0 0 0 / 15%);

  // .modal__title {
  // }

  .modal__input {
    border: 2px solid black;
    border-radius: 10px;
    padding: 0.5em 0;
    width: 100%;
  }

  .modal__input.error {
    background-color: red;
  }

  .modal__error {
    color: #e34850;
  }

  // .modal__button-find {
  // }

  // .modal__button-close {
  // }
}
</style>
