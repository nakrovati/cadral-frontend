<template>
  <TheHeader />
  <main class="intro">
    <div class="container"></div>
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "Components/TheHeader.vue";
import TheFooter from "Components/TheFooter.vue";

export default {
  name: "404",
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.intro {
  padding: 0 20px;

  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 100px 0;
    width: 100%;
  }
}
</style>
