<template>
  <div>
    <UrlReducerInput />
    <div class="url-example">
      {{ t("home.reducer.urlExample", { example: "https://google.com" }) }}
    </div>
    <Transition>
      <UrlReducerList v-if="isUrlArrayEmpty" />
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch, computed, provide } from "vue";
import { useI18n } from "vue-i18n";
import UrlReducerInput from "Components/UrlReducer/TheUrlReducerInput.vue";
import UrlReducerList from "Components/UrlReducer/TheUrlReducerList.vue";

const { t } = useI18n();

const urlArray = ref(
  localStorage.getItem("url-array") === null
    ? []
    : JSON.parse(localStorage.getItem("url-array"))
);

const isUrlArrayEmpty = computed(() => {
  return urlArray.value.length ? true : false;
});

watch(urlArray.value, () => {
  localStorage.setItem("url-array", JSON.stringify(urlArray.value));
});

function addUrl(urlForArray) {
  urlArray.value.unshift(urlForArray);
}

provide("urlProvide", { urlArray, addUrl });
</script>

<style lang="scss" scoped>
.url-example {
  font-size: 0.75em;
  margin: 10px 20px 30px;
}

@media (prefers-color-scheme: dark) {
  .url-example {
    color: colors.$text-white;
  }
}
</style>
