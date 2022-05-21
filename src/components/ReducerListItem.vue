<template>
  <li class="url-item">
    <span class="url-item__initial-url">{{ props.initialUrl }}</span>
    <span class="url-item__right-block"
      ><a href="" class="url-item__short-url" ref="shortUrlRef">{{
        props.shortUrl
      }}</a>
      <button
        class="button url-item__button-copy-short-url"
        @click="copyShortUrl"
      >
        Copy
      </button></span
    >
  </li>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  initialUrl: { type: String },
  shortUrl: { type: String },
});

const shortUrlRef = ref(null);

onMounted(() => {
  shortUrlRef.value.href = props.initialUrl;
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
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 1em 19px;

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
    }

    .url-item__button-copy-short-url {
      color: colors.$primary;
      padding: 9px 30px;
    }
  }
}
</style>
