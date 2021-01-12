<template>
  <client-only>
    <lazy-component>
      <img class="work-image" :src="src" :alt="alt" />
    </lazy-component>
  </client-only>
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
