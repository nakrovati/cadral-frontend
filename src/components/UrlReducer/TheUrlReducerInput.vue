<template>
  <div class="url-reducer">
    <div class="url-reducer__container">
      <input
        v-model="urlToReduce"
        class="url-reducer__input"
        :placeholder="t('home.reducer.inputPlaceholder')"
        type="text"
      />
      <button
        class="button-copy"
        aria-label="copy text to clipboard"
        @click="copyToClipboard"
      >
        <object
          class="button-copy__icon"
          :data="IconClipboard"
          type="image/svg+xml"
          tabindex="-1"
        ></object>
      </button>
    </div>
    <button class="button button-reduce" @click="reduceURL">
      {{ t("home.reducer.buttonReduce") }}
    </button>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useI18n } from "vue-i18n";
import IconClipboard from "Assets/icons/clipboard-regular.svg?url";
import stringIsUrl from "Helpers/stringIsUrl.js";

const { t } = useI18n();

const urlToReduce = ref();
const { addUrl } = inject("urlProvide");
const { VITE_BACKEND_URL } = import.meta.env;

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(urlToReduce.value);
  } catch (error) {
    console.error(error);
  }
}

async function reduceURL() {
  if (!urlToReduce.value) {
    return false;
  }

  if (!stringIsUrl(urlToReduce.value)) {
    return false;
  }

  const url = {
    initialUrl: urlToReduce.value,
    dateCreated: new Date(),
  };

  const response = await fetch(`${VITE_BACKEND_URL}/urls/`, {
    method: "POST",
    body: JSON.stringify(url),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  await addUrl(json);
}
</script>

<style lang="scss" scoped>
.url-reducer {
  display: flex;
  font-size: 1em;
  justify-content: space-between;

  .url-reducer__container {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
    width: 100%;

    .url-reducer__input {
      border-radius: 10px;
      box-shadow: colors.$shadow;
      padding: 14px 60px 14px 20px;
      position: relative;
      text-overflow: ellipsis;
      width: 100%;

      &::placeholder {
        color: colors.$input-placeholder;
      }
    }
  }
}

.button-copy {
  background-color: inherit;
  height: 100%;
  padding: 8px 11px;
  position: absolute;
  right: 0;
  width: 50px;
  z-index: 1;

  &:hover,
  &:active {
    background-color: colors.$button-copy-hover;
  }

  &__icon {
    height: 75%;
    position: relative;
    width: 100%;
    z-index: -1;
  }
}

.button-reduce {
  background-color: colors.$button-reduce;
  color: colors.$text-white;
  margin-left: 40px;
  padding: 14px 40px;

  &:hover,
  &:active {
    background-color: colors.$button-reduce-hover;
  }
}

@media screen and (max-width: 768px) {
  .button-reduce {
    margin-left: 20px;
  }
}

@media screen and (max-width: 520px) {
  .url-reducer {
    flex-wrap: wrap;

    .url-reducer__container {
      width: 100%;
    }
  }

  .button-reduce {
    margin: 10px 0 0;
    width: 100%;
  }
}
</style>
