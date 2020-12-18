<template>
  <div class="pager">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.pager {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid red;
  > * {
    width: calc((100% - 40px) / 2);
    border: 1px solid #000;
    @include media(md, max) {
      width: calc((100% - 20px) / 2);
    }
  }
}
</style>
