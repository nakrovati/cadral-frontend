<template>
  <div class="modal__wrapper">
    <h3 class="modal__title">{{ t("originUrl.modal.title") }}</h3>
    <input
      v-model="searchUrl"
      class="modal__input"
      type="text"
      placeholder="cadral.fun/Abcdefg"
      :class="{ error: hasError }"
    />
    <Transition>
      <div v-show="hasError" class="modal-errors">
        {{ errorMessage }}
      </div>
    </Transition>
    <div class="actions">
      <button class="actions__close" @click="emit('close')">
        {{ t("originUrl.modal.buttonClose") }}
      </button>
      <button class="actions__find" @click="findOriginSite">
        {{ t("originUrl.modal.buttonFind") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import router from "Router";

const { t } = useI18n();

const searchUrl = ref(),
  hasError = ref(false),
  errorMessage = ref();

const emit = defineEmits(["close"]);

const siteRegex = import.meta.env.PROD
  ? /^(?:https?:\/\/)?(?:www\.)?cadral\.fun\/(\w{7})[+]?$/
  : /^(?:https?:\/\/)?(?:www\.)?localhost:3000\/(\w{7})[+]?$/;

function findOriginSite() {
  errorMessage.value = null;
  hasError.value = false;

  if (!searchUrl.value) {
    errorMessage.value = t("originUrl.modal.errors.searchUrlIsEmpty");
    hasError.value = true;
    return false;
  }

  const [fullUrl, shortAdress] = searchUrl.value.match(siteRegex) ?? [];

  if (!fullUrl) {
    errorMessage.value = t("originUrl.modal.errors.searchUrlIsIncorrect");
    hasError.value = true;
    return false;
  }

  router
    .push({
      name: "OriginUrl",
      params: { shortUrl: shortAdress.concat("+") },
    })
    .then(() => emit("close"))
    .catch((error) => alert(error));
}
</script>

<style lang="scss" scoped>
.modal__wrapper {
  box-shadow: colors.$shadow;

  .modal__title {
    font-size: 1.25em;
    margin-bottom: 40px;
  }

  .modal__input {
    border-radius: 10px;
    box-shadow: colors.$shadow;
    margin-bottom: 20px;
    padding: 0.5em calc(1em - 1px);
    width: 100%;

    &.error {
      box-shadow: colors.$error-shadow;
    }
  }

  .modal-errors {
    color: colors.$error;
    margin-bottom: 40px;
  }
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  .actions__close {
    color: colors.$text-black;
    padding: 0.5em 2em;
  }

  .actions__find {
    background-color: colors.$primary;
    color: colors.$text-white;
    padding: 0.5em 2em;
  }
}

@media (prefers-color-scheme: dark) {
  .modal__title,
  .actions .actions__close {
    color: colors.$text-white;
  }
}
</style>
