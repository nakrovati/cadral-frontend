<template>
  <ul v-if="isUrlArrayEmpty" class="url-list">
    <ReducerListItem
      v-for="item in urlArray"
      :key="item.shortUrl"
      :initialUrl="item.initialUrl"
      :shortUrl="item.shortUrl"
    />
  </ul>
</template>

<script setup>
import { inject, computed } from "vue";
import ReducerListItem from "Components/ReducerListItem.vue";

const { urlArray } = inject("urlProvide");

const isUrlArrayEmpty = computed(() => {
  return !urlArray.value.length ? false : true;
});
</script>

<style lang="scss" scoped>
.url-list {
  background-color: white;
  border: solid black 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  padding: 0;
}
</style>
