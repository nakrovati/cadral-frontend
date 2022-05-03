<template>
  <div class="url-reducer">
    <div class="url-reducer__container">
      <input
        class="url-reducer__input"
        placeholder="Enter the link here"
        type="text"
        ref="urlToReduce"
        v-model="urlToReduce"
      />
      <button
        class="button-copy"
        aria-label="copy text to clipboard"
        v-on:click="copyToClipboard"
      >
        <Clipboard class="button-copy__icon" />
      </button>
    </div>
    <button class="url-reducer__button-reduce" v-on:click="reduceURL">
      Create
    </button>
  </div>
</template>

<script>
import Clipboard from "Icons/clipboard-regular.svg?component";

export default {
  name: "ReducerInput",
  components: { Clipboard },
  data() {
    return { urlToReduce: null };
  },
  methods: {
    copyToClipboard() {
      const textToCopy = this.$refs.urlToReduce.value;
      navigator.clipboard.writeText(textToCopy);
    },

    async reduceURL() {
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
    },
  },
};
</script>

<style lang="scss" scoped>
.url-reducer {
  display: flex;
  font-size: 1em;
  justify-content: space-between;

  &__container {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
    width: 85%;

    .url-reducer__input {
      border: 1px solid black;
      border-radius: 10px;
      padding: 13px 59px 13px 19px;
      position: relative;
      text-overflow: ellipsis;
      width: 100%;

      &::placeholder {
        color: colors.$text-search-placeholder;
      }
      &:active {
        outline: initial;
      }
      &:focus {
        outline: 4px solid #edbc64;
      }
    }
  }

  &__button-reduce {
    background-color: colors.$button;
    border-radius: 10px;
    color: colors.$text-white;
    margin-left: 40px;
    padding: 14px 30px;

    &:hover,
    &:active {
      background-color: colors.$button-hover;
    }
    &:focus {
      outline: 4px solid colors.$button-focus-border;
    }
  }
}

.button-copy {
  background-color: unset;
  border-radius: 5px;
  height: 40px;
  margin-right: 5px;
  padding: 8px 11px;
  position: absolute;
  right: 0;
  width: 40px;

  &:focus {
    background-color: #b0ccec;
    outline: 4px solid colors.$button-focus-border;
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
      margin: 10px 0 0 0;
      width: 100%;
    }
  }
}
</style>
