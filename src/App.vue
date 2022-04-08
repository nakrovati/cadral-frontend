<template>
  <hr class="line" />
  <TheHeader />
  <main class="intro">
    <div class="container">
      <div class="inner">
        <h1 class="inner__title">Shorten the link</h1>
        <h2 class="inner__subtitle">
          Create a short link to copy to your website, social media, and
          messengers.
        </h2>
        <img src="" alt="" class="inner__image" />
      </div>
      <Reducer />
    </div>
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "Components/TheHeader.vue";
import TheFooter from "Components/TheFooter.vue";
import Reducer from "Components/Reducer.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter, Reducer },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.line {
  background-color: color.scale($color: colors.$primary, $lightness: 25%);
  height: 6px;
  margin: 0;
}

.intro {
  padding: 0 20px;

  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 100px 0;
    width: 100%;
  }
}

.inner {
  font-family: Lekton, Arial, Helvetica, sans-serif;
  padding: 20px;

  &__title {
    font-size: 64px;
    font-weight: bold;
    margin: 0;
  }

  &__subtitle {
    font-size: 24px;
  }

  &__image {
    height: auto;
    max-width: 100%;
  }
}
</style>
