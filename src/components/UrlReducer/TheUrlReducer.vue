<template>
  <div>
    <UrlReducerInput />
    <div class="url-example">
      {{ t("home.reducer.exampleUrl", { example: exampleUrl }) }}
    </div>
    <Transition>
      <LazyUrlReducerList v-if="isUrlArrayEmpty" />
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch, computed, provide, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";
import UrlReducerInput from "Components/UrlReducer/TheUrlReducerInput.vue";
import getRandomUrl from "Helpers/getRandomUrl";

const LazyUrlReducerList = defineAsyncComponent({
  loader: () => import("Components/UrlReducer/TheUrlReducerList.vue"),
});

const exampleUrl = getRandomUrl();

const { t } = useI18n();

const urlArray = ref(
  localStorage.getItem("url-array") === null
    ? []
    : JSON.parse(localStorage.getItem("url-array"))
);

// Updates localstorage by storing objects with shortened url data in the 'url-array' array
watch(urlArray.value, () => {
  localStorage.setItem("url-array", JSON.stringify(urlArray.value));
});

const isUrlArrayEmpty = computed(() => {
  return urlArray.value.length;
});

function addUrl(urlForArray) {
  urlArray.value.unshift(urlForArray);
}

provide("urlProvide", { urlArray, addUrl });
</script>

<style lang="scss" scoped>
.url-example {
  font-size: 0.75em;
  margin: 0.5em 2em 2em;
}

@media (prefers-color-scheme: dark) {
  .url-example {
    color: colors.$text-white;
  }
}
</style>
