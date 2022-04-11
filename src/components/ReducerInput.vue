<template>
  <div class="url-reducer">
    <div class="url-reducer__container">
      <input
        class="url-reducer__input"
        type="text"
        ref="urlToReduce"
        placeholder="Enter the link here"
        v-model="urlToReduce"
      />
      <button v-on:click="copyToClipboard" class="button-copy">
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
    reduceURL() {},
    copyToClipboard() {
      const textToCopy = this.$refs.urlToReduce.value;
      navigator.clipboard.writeText(textToCopy);
    },
  },
};
</script>

<style lang="scss" scoped>
.url-reducer {
  display: flex;
  font-size: 16px;
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
    }

    .button-copy {
      background-color: unset;
      border: 0;
      height: 40px;
      margin-right: 5px;
      padding: 8px 11px;
      position: absolute;
      right: 0;
      width: 40px;
    }
  }

  &__button-reduce {
    background-color: colors.$button;
    border: 0;
    border-radius: 10px;
    color: colors.$text-white;
    margin-left: 40px;
    padding: 14px 30px;

    &:hover {
      background-color: colors.$button-hover;
    }
  }
}

@media (max-width: 425px) {
  .url-reducer__button-reduce {
    margin-left: 20px;
  }
}
</style>
