<template>
  <div class="user-icon">
    <img :src="src" alt="管理者アイコン" class="user-icon__image" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

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
