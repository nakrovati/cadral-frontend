<template>
  <div class="url-reducer">
    <div class="url-reducer__container">
      <input
        class="url-reducer__input"
        placeholder="Enter the link here"
        type="text"
        v-model="urlToReduce"
      />
      <button
        class="button-copy"
        aria-label="copy text to clipboard"
        @click="copyToClipboard"
      >
        <IconClipboard class="button-copy__icon" />
      </button>
    </div>
    <button class="button button-reduce" @click="reduceURL">Create</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconClipboard from "Icons/clipboard.svg";

const urlToReduce = ref(null);

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(urlToReduce.value);
  } catch (error) {
    console.error(error);
  }
}

async function reduceURL() {
  const urlToReduce = {
    initialUrl: this.urlToReduce,
    dateCreated: new Date(),
  };
  // const response = await fetch("http://localhost:3000", {
  //   method: "POST",
  //   body: JSON.stringify(urlToReduce),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  const json = await response.json();
  console.log(JSON.stringify(json));
}
</script>

<style lang="scss" scoped>
.url-reducer {
  display: flex;
  font-size: 1em;
  justify-content: space-between;

  .url-reducer__container {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
    width: 85%;

    .url-reducer__input {
      border: 1px solid black;
      padding: 13px 59px 13px 19px;
      position: relative;
      text-overflow: ellipsis;
      width: 100%;

      &::placeholder {
        color: colors.$text-search-placeholder;
      }

      &:focus {
        border: none;
        outline: 4px solid #edbc64;
      }
    }
  }
}

.button-reduce {
  background-color: colors.$button;
  color: colors.$text-white;
  margin-left: 40px;
  padding: 14px 30px;
  transition: background-color 0.3s ease;

  &:hover,
  &:active {
    background-color: colors.$button-hover;
  }

  &:focus {
    outline: 4px solid colors.$button-focus-outline;
  }
}

.button-copy {
  background-color: unset;
  height: 40px;
  margin-right: 5px;
  padding: 8px 11px;
  position: absolute;
  right: 0;
  width: 40px;
  z-index: 1;

  &:focus {
    outline: 4px solid colors.$button-focus-outline;
  }
}

@media screen and (max-width: 768px) {
  .url-reducer__button-reduce {
    margin-left: 20px;
  }
}

@media screen and (max-width: 425px) {
  .url-reducer {
    flex-wrap: wrap;

    &__container {
      width: 100%;
    }

    &__button-reduce {
      margin: 10px 0 0;
      width: 100%;
    }
  }
}
</style>
