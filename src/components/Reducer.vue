<template>
  <div>
    <ReducerInput />
    <div class="url-example">Example: https://google.com</div>
    <ReducerList v-if="isUrlArrayEmpty" />
  </div>
</template>

<script setup>
import { ref, watch, computed, provide } from "vue";
import ReducerInput from "Components/ReducerInput.vue";
import ReducerList from "Components/ReducerList.vue";

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

@media screen and (prefers-color-scheme: dark) {
  .url-example {
    color: colors.$text-white;
  }
}
</style>
