<template>
  <div class="user-icon">
    <img
      src="images/user-icon.png"
      alt="管理者アイコン"
      class="user-icon__image"
    />
  </div>
</template>

<style lang="scss" scoped>
.user-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  border-radius: 100%;
  background: $bg-color;
  overflow: hidden;
  @include media(md, max) {
    width: 80px;
    height: 80px;
  }
  &__image {
    width: 100%;
  }
}
</style>
