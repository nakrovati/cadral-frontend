<template>
  <div class="inner">
    <div class="inner__left-section">
      <h1 class="inner__title">{{ t("home.inner.title") }}</h1>
      <div class="inner__subtitle">
        {{ t("home.inner.subtitle") }}
      </div>
    </div>
    <div class="inner__right-section">
      <picture class="inner__image">
        <source
          srcset="../assets/images/cloud-400.webp"
          media="(min-width: 600px)"
        />
        <img
          class="inner__image-fallback"
          srcset="../assets/images/cloud-400.png"
          alt="My default image"
        />
      </picture>
    </div>
  </div>
  <TheUrlReducer class="reducer" />
</template>

<script setup>
import { useI18n } from "vue-i18n";
import TheUrlReducer from "Components/UrlReducer/TheUrlReducer.vue";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 20px;

  .inner__left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: calc(960px / 6 * 4);

    .inner__title {
      font-size: 4em;
      font-weight: bold;
      margin: 0 0 20px;
    }

    .inner__subtitle {
      font-size: 24px;
      line-height: 1.25;
      margin-top: 20px;
    }
  }

  .inner__right-section {
    .inner__image img {
      max-height: 200px;
    }
  }
}

@media screen and (max-width: 920px) {
  .inner__image img {
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .inner__title {
    display: none;
  }

  .inner__subtitle {
    font-size: 1.25em;
    margin-top: 0;
  }
}

@media (prefers-color-scheme: dark) {
  .inner__left-section {
    color: colors.$text-white;
  }
}
</style>
