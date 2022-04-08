<template>
  <div class="url-reducer">
    <input
      class="url-reducer__input"
      placeholder="Enter the link here"
      v-model="urlToReduce"
    />
    <button class="url-reducer__button-reduce" v-on:click="reduceURL">
      Create
    </button>
  </div>
</template>

<script>
export default {
  name: "ReducerInput",
  components: {},
  data() {
    return {
      urlToReduce: null,
    };
  },
  methods: {
    reduceURL: function () {},
  },
};
</script>

<style lang="scss" scoped>
.url-reducer {
  display: flex;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 16px;
  justify-content: space-between;

  &__input {
    border: 1px solid black;
    border-radius: 10px;
    padding: 13px 19px;
    width: 85%;

    &::placeholder {
      color: colors.$text-search-placeholder;
    }
  }

  &__button-reduce {
    background-color: colors.$button;
    border: 0;
    border-radius: 10px;
    color: colors.$text-white;
    padding: 14px 20px;

    &:hover {
      background-color: colors.$button-hover;
    }
  }
}
</style>
