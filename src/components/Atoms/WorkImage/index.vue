<template>
  <img class="work-image" :src="src" :alt="alt" loading="lazy" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.work-image {
  width: 100%;
}
</style>
