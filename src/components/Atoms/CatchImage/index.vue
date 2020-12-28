<template>
  <div class="catch-image">
    <img :src="typoSrc" alt="soda" class="catch-image__typo" />
    <img :src="circleSrc" alt="cherry" class="catch-image__circle" />
  </div>
</template>

<script>
export default {
  props: {
    typoSrc: {
      type: String,
      required: true,
    },
    circleSrc: {
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
