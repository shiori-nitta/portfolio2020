<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list__item">
        <nuxt-link class="navigation-list__link" to="/about">About</nuxt-link>
      </li>
      <li class="navigation-list__item">
        <nuxt-link class="navigation-list__link" to="/dailyui"
          >DailyUI</nuxt-link
        >
      </li>
      <li class="navigation-list__item">
        <nuxt-link class="navigation-list__link" to="/tips">Tips</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  padding: 10px 0;
  width: 100%;
}
.navigation-list {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  &__item {
    font-size: 1.6rem;
    @include font-en-bold;
    &:not(:first-child) {
      margin-left: 20px;
    }
    @include media(md, max) {
      font-size: 1.4rem;
      margin-left: 4vw;
    }
  }
  &__link {
    padding: 10px 0;
    color: $text-color;
    text-decoration: none;
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
      }
    }
  }
}
</style>
