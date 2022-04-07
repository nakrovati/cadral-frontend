<template>
  <header class="header">
    <a href="" class="header__logo">Rapid URL</a>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "Styles/colors";

.header {
  padding: 20px 40px;

  &__logo {
    font-family: Lekton, Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: Bold;
  }
}
</style>
