<template>
  <li class="url-item">
    <div class="url-item__initial-url">{{ props.initialUrl }}</div>
    <div class="url-item__right-block">
      <a :href="props.initialUrl" class="url-item__short-url">{{
        props.shortUrl
      }}</a>
      <button class="url-item__button-copy-short-url" @click="copyShortUrl">
        {{ t("home.reducer.buttonCopy") }}
      </button>
    </div>
  </li>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  initialUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

async function copyShortUrl() {
  try {
    await navigator.clipboard.writeText(props.shortUrl);
  } catch (error) {
    console.error(error);
  }
}
</script>

<style lang="scss" scoped>
.url-item {
  align-items: center;
  display: grid;
  font-size: 0.8em;
  gap: 40px;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 1em 20px;

  .url-item__initial-url {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .url-item__right-block {
    align-items: center;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr auto;
    margin-left: auto;

    .url-item__short-url {
      color: colors.$primary;
      font-weight: 600;
    }

    .url-item__button-copy-short-url {
      background-color: colors.$button-copy;
      border-radius: 5px;
      color: colors.$primary;
      padding: 9px 30px;

      &:hover,
      &:active {
        background-color: colors.$button-copy-hover;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .url-item {
    gap: 0;
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr;

    .url-item__right-block {
      margin: unset;
    }
  }
}

@media screen and (max-width: 425px) {
  .url-item__right-block {
    gap: unset;
  }
}
</style>
