<template>
  <div>
    <TheReducerInput />
    <div class="url-example">Example: https://google.com</div>
  </div>
</template>

<script setup>
import TheReducerInput from "Components/TheReducerInput.vue";
</script>

<style lang="scss" scoped>
.url-example {
  font-size: 0.75em;
  margin: 10px 20px 30px;
}
</style>
