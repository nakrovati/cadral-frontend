<template>
  <ul class="url-list">
    <UrlReducerListItem
      v-for="(item, index) in urlArray"
      :key="index"
      :initialUrl="item.initialUrl"
      :shortUrl="item.shortUrl"
    />
  </ul>
</template>

<script setup>
import { inject } from "vue";
import UrlReducerListItem from "Components/UrlReducer/UrlReducerListItem.vue";

const { urlArray } = inject("urlProvide");
</script>

<style lang="scss" scoped>
.url-list {
  background-color: white;
  border-radius: 10px;
  box-shadow: colors.$shadow;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
