<template>
  <hr class="line" />
  <TheHeader />
  <main class="inner">
    <div class="container"></div>
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "Components/TheHeader.vue";
import TheFooter from "Components/TheFooter.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "Styles/colors";
@use "sass:color";
.line {
  background-color: color.scale($color: colors.$primary, $lightness: 25%);
  height: 6px;
  margin: 0;
}
</style>
