<template>
  <div class="url">
    <div class="url__initial-url">{{ initialUrl }}</div>
    <div class="url__date-created">{{ normalizedDate }}</div>
    <div class="url__short-url">
      <span class="url__actions-left">
        <object
          class="icon short-url__icon"
          :data="IconLink"
          type="image/svg+xml"
          tabindex="-1"
        ></object>
        <a class="short-url__url-adress" :href="`http://${props.shortUrl}`">{{
          shortUrl
        }}</a>
      </span>
      <span class="url__actions-right">
        <button
          class="button-copy"
          :aria-label="t('originUrl.buttonCopy.aria')"
          @click="copyShortUrl"
        >
          <object
            class="icon button-copy__icon"
            :data="IconClipboard"
            type="image/svg+xml"
            tabindex="-1"
          ></object>
          <span class="button-copy__name">{{
            t("originUrl.buttonCopy.text")
          }}</span>
        </button>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import IconLink from "Assets/icons/link-solid.svg?url";
import IconClipboard from "Assets/icons/clipboard-regular.svg?url";

const { t, locale } = useI18n();

const props = defineProps({
  shortUrl: String,
  initialUrl: String,
  dateCreated: String,
});

console.log(props.shortUrl);

const normalizedDate = computed(() =>
  new Intl.DateTimeFormat(locale.value, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(props.dateCreated))
);

async function copyShortUrl() {
  try {
    await navigator.clipboard.writeText(props.shortUrl);
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped lang="scss">
.url__initial-url {
  display: block;
  font-size: 1.5em;
  font-weight: 600;
  height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.url__date-created {
  margin-bottom: 2em;
}

.url__short-url {
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: colors.$shadow;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;

  .url__actions-left {
    padding-right: 1em;

    .short-url__icon {
      display: inline;
      height: 24px;
      margin-right: 0.75em;
      vertical-align: middle;
    }
  }
}

.button-copy {
  align-items: center;
  border-radius: 5px;
  padding: 0.25em 0.5em;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: colors.$button-copy-hover;
  }

  &__icon {
    display: inline;
    margin-right: 1em;
    position: relative;
    vertical-align: middle;
    z-index: -1;
  }
}

.icon {
  height: 24px;
}

@media screen and (max-width: 768px) {
  .button-copy {
    &__icon {
      display: inline-block;
    }

    &__name {
      display: none;
    }
  }
}

@media screen and (max-width: 425px) {
  .icon {
    height: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  .url__initial-url,
  .url__date-created {
    color: colors.$text-white;
  }
}
</style>
