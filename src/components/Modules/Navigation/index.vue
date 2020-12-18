<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list__item">
        <nuxt-link class="navigation-list__link" to="/">About</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  padding: 10px 0;
}
.navigation-list {
  display: flex;
  &__item {
    font-size: 1.6rem;
    @include font-en-bold;
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
  &__link {
    padding: 10px 0;
    color: $text-color;
    cursor: pointer;
    position: relative;
    &::before {
      display: block;
      content: '';
      width: 100%;
      height: 2px;
      background: $text-color;
      transform: scaleX(0);
      transform-origin: bottom left;
      position: absolute;
      bottom: 0px;
      left: 0;
      transition: all 0.3s ease;
    }
    &:hover {
      &::before {
        transform: scaleX(1);
        transform-origin: bottom right;
      }
    }
  }
}
</style>
