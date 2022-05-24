<template>
  <TheHeader />
  <main class="intro">
    <div class="container">
      <div class="inner">
        <div class="inner__left-section">
          <h1 class="inner__title">Shorten the link</h1>
          <div class="inner__subtitle">
            Create a short link to copy to your website, social media, and
            messengers.
          </div>
        </div>
        <div class="inner__right-section">
          <picture class="inner__image">
            <source
              srcset="./assets/images/cloud-400.webp"
              media="(min-width: 600px)"
            />
            <img
              class="inner__image-fallback"
              srcset="./assets/images/cloud-400.png"
              alt="My default image"
            />
          </picture>
        </div>
      </div>
      <Reducer class="reducer" />
    </div>
  </main>
  <TheFooter />
</template>

<script setup>
import TheHeader from "Components/TheHeader.vue";
import TheFooter from "Components/TheFooter.vue";
import Reducer from "Components/Reducer.vue";
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

.inner {
  display: flex;
  justify-content: space-between;
  padding: 20px;

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

@media screen and (max-width: 912px) {
  .inner__image img {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .intro .container {
    max-width: 540px;
  }
}

@media screen and (max-width: 425px) {
  .inner__title {
    font-size: 3em;
  }

  .inner__subtitle {
    font-size: 1.25em;
  }
}

@media screen and (prefers-color-scheme: dark) {
  .inner__left-section {
    color: colors.$text-white;
  }
}
</style>
