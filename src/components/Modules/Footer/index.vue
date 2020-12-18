<template>
  <footer class="footer">
    <small class="footer__inner">© Soda All Rights Reserved.</small>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 40px 24px 20px;
  display: flex;
  justify-content: center;
  &__inner {
    margin: 0 auto;
    text-align: center;
    font-size: 1.4rem;
    color: $text-color;
    @include font-en-normal;
  }
}
</style>
