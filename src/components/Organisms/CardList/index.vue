<template>
  <div class="card-list"><slot></slot></div>
</template>

<style lang="scss" scoped>
.card-list {
  max-width: 1060px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  > * {
    width: calc((100% - 80px) / 3);
    @include media(md, max) {
      width: 100%;
    }
    &:not(:nth-child(3n)) {
      margin-right: 40px;
      @include media(md, max) {
        margin-right: 0;
      }
    }
    &:nth-child(n + 4) {
      margin-top: 40px;
      @include media(md, max) {
        margin-top: 0;
      }
    }
    &:not(:first-child) {
      @include media(md, max) {
        margin-top: 24px;
      }
    }
  }
}
</style>
