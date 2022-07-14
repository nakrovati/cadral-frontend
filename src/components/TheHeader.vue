<template>
  <header class="header">
    <router-link class="header__logo" to="/">Cadral URL</router-link>
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link" @click="isOpen = true">
          {{ t("header.showOriginUrl") }}
        </a>
        <teleport to="body">
          <div v-if="isOpen" class="modal">
            <TheOriginUrlModal @close="isOpen = false" />
          </div>
        </teleport>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import TheOriginUrlModal from "./TheOriginUrlModal.vue";

const { t } = useI18n();

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 2560px;
  padding: 10px 40px;

  .header__logo {
    font-family: Lekton, Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    font-weight: bold;
  }
}

.menu {
  align-items: center;
  display: flex;
  gap: 2em;
  list-style: none;
  margin: 0;
  padding: 0;

  .menu__item {
    .menu__link {
      cursor: pointer;

      &:hover {
        color: colors.$primary;
      }
    }
  }
}

.modal {
  align-items: center;
  backdrop-filter: blur(0.5em);
  background-color: rgb(0 0 0 / 40%);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;

  > div {
    background-color: colors.$background-light;
    border-radius: 10px;
    padding: 40px;
  }
}

@media (prefers-color-scheme: dark) {
  .header {
    color: colors.$text-white;
  }

  .modal > div {
    background-color: colors.$background-dark;
  }
}
</style>
