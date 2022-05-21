<template>
  <div>
    <ReducerInput />
    <div class="url-example">Example: https://google.com</div>
    <ReducerList />
  </div>
</template>

<script setup>
import { ref, watch, provide } from "vue";
import ReducerInput from "Components/ReducerInput.vue";
import ReducerList from "Components/ReducerList.vue";

const urlArray = ref(
  localStorage.getItem("counter") === null
    ? []
    : JSON.parse(localStorage.getItem("counter"))
);

watch(urlArray.value, () => {
  localStorage.setItem("counter", JSON.stringify(urlArray.value));
});

function addUrl(urlForArray) {
  urlArray.value.push(urlForArray) - 1;
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
