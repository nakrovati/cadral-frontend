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
    gap: 40px;
    justify-content: space-between;
    max-width: calc(960px / 6 * 4);

    .inner__title {
      font-size: 4em;
      font-weight: bold;
    }

    .inner__subtitle {
      font-size: 1.5em;
      line-height: 1.25;
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

@media screen and (max-width: 768px) {
  .inner {
    .inner__left-section {
      gap: 20px;

      .inner__title {
        font-size: 3em;
      }

      .inner__subtitle {
        font-size: 1.25em;
      }
    }

    .inner__right-section {
      .inner__image img {
        display: none;
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  .inner__left-section {
    color: colors.$text-white;
  }
}
</style>
