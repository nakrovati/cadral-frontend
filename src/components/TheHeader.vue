<template>
  <header class="header">
    <a href="" class="header__logo">Rapid URL</a>
  </header>
</template>

<script>
import IconSun from "Icons/sun.svg";
import IconMoon from "Icons/moon.svg";

export default {
  name: "TheHeader",
  components: {
    IconSun,
    IconMoon,
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 40px;

  &__logo {
    font-family: Lekton, Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: Bold;
  }
}
</style>
