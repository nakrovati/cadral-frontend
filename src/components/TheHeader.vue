<template>
  <header class="header">
    <a href="/" class="header__logo">Rapid URL</a>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="/origin-url/" class="nav-menu__item">show origin url</a>
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

  .header__logo {
    font-family: Lekton, Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    font-weight: bold;
  }
}

.menu__list {
  display: flex;

  .menu__item {
    list-style-type: none;
  }
}

@media (prefers-color-scheme: dark) {
  .header {
    color: colors.$text-white;
  }
}
</style>
