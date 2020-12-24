<template>
  <div class="catch-image">
    <img :src="typo_src" alt="soda" class="catch-image__typo" />
    <img :src="circle_src" alt="cherry" class="catch-image__circle" />
  </div>
</template>

<script>
export default {
  props: {
    typo_src: {
      type: String,
      required: true,
    },
    circle_src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.catch-image {
  position: relative;
  max-width: 334px;
  margin: auto;
  &__circle {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 10px;
    left: 216px;
  }
}
</style>
