<template>
  <div class="catch">
    <div class="catch__title"><catch-image /></div>
    <p class="catch__description">WEB DESIGNER’S PORTFOLIO</p>
  </div>
</template>

<script>
import CatchImage from '~/components/Atoms/CatchImage'
export default {
  components: {
    CatchImage,
  },
}
</script>

<style lang="scss" scoped>
.catch {
  width: 100%;
  padding: 160px 40px;
  @include media(md, max) {
    padding: 120px 24px;
  }
  &__title {
    width: 100%;
    max-width: 334px;
    margin: auto;
    @include media(md, max) {
      width: 72vw;
      max-width: 100%;
    }
  }
  &__description {
    margin: 24px auto 0;
    font-size: 1.6rem;
    text-align: center;
    color: $text-color;
    @include font-en-bold;
    @include media(md, max) {
      font-size: 1.4rem;
    }
  }
}
</style>
