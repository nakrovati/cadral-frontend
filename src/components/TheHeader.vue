<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">Cadral URL</router-link>
    </div>
    <nav class="menu">
      <button @click="isOpen = true">
        {{ t("header.showOriginUrl") }}
      </button>
      <teleport to="body">
        <div class="modal" v-if="isOpen">
          <TheOriginUrlModal @close="isOpen = false" />
        </div>
      </teleport>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import TheOriginUrlModal from "Components/TheOriginUrlModal.vue";

const { t } = useI18n();

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.modal {
  align-items: center;
  background-color: rgb(0 0 0 / 10%);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;

  > div {
    background-color: #fff;
    border-radius: 10px;
    padding: 50px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 2560px;
  padding: 10px 40px;
}

.logo {
  font-family: Lekton, Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
}

.menu {
  display: flex;

  button {
    background-color: inherit;
    color: inherit;
    padding: 0;

    &:hover {
      color: colors.$primary;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .header {
    color: colors.$text-white;
  }
}
</style>
