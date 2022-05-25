<template>
  <header class="header">
    <div class="logo">
      <a href="/">Rapid URL</a>
    </div>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="/origin-url/">show origin url</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 2560px;
  padding: 20px 40px;
}

.logo {
  font-family: Lekton, Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
}

.menu {
  .menu__list {
    display: flex;
    margin: 0;

    .menu__item {
      list-style-type: none;

      &:hover {
        color: colors.$primary;
        transition: color 0.3s ease;
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  .header {
    color: colors.$text-white;
  }
}
</style>
