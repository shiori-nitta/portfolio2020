<template>
  <div class="card-list"><slot></slot></div>
</template>

<style lang="scss" scoped>
.card-list {
  width: calc(100% - 32px);
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  @include media(md, max) {
    width: 100%;
  }
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
