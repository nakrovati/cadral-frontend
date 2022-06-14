<template>
  <TheHeader />
  <main class="intro">
    <div class="container">
      <router-view />
    </div>
  </main>
  <TheFooter />
</template>

<script setup>
import TheHeader from "Components/TheHeader.vue";
import TheFooter from "Components/TheFooter.vue";
</script>

<style lang="scss" scoped>
.intro {
  padding: 0 20px;

  .container {
    margin: 0 auto;
    max-width: 1080px;
    padding: 100px 0;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .intro .container {
    max-width: 540px;
    padding: 40px 0;
  }
}
</style>
