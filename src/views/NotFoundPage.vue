<template>
  <div class="page-not-found">
    <h1 class="page-not-found__title">That page doesn't exist!</h1>
    <div class="page-not-found__subtitle">
      Sorry, the page you are looking for could not be found.
    </div>
    <router-link to="/" class="btn-go-to-home">Go to Home</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.page-not-found {
  align-items: center;
  display: flex;
  flex-direction: column;

  .page-not-found__title {
    font-size: 4em;
  }

  .page-not-found__subtitle {
    font-size: 1.5em;
  }
}

.btn-go-to-home {
  background-color: colors.$primary;
  border-radius: 10px;
  color: colors.$text-white;
  margin-top: 4em;
  padding: 0.5em 1em;
}

@media (prefers-color-scheme: dark) {
  .page-not-found {
    color: colors.$text-white;
  }
}

@media screen and (max-width: 768px) {
  .page-not-found {
    .page-not-found__title {
      font-size: 3em;
    }

    .page-not-found__subtitle {
      font-size: 1.25em;
    }
  }
}
</style>
