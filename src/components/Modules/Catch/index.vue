<template>
  <div class="catch">
    <div class="catch__title">
      <catch-image :typo-src="typoSrc" :circle-src="circleSrc" />
    </div>
    <p class="catch__description">WEB DESIGNER’S PORTFOLIO</p>
  </div>
</template>

<script>
import CatchImage from '~/components/Atoms/CatchImage'
export default {
  components: {
    CatchImage,
  },
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
.catch {
  width: 100%;
  padding: 80px 40px 160px;
  @include media(md, max) {
    padding: 120px 24px 152px;
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
    letter-spacing: 0.1em;
    // opacity: 0;
    // transform: translate(0px, 10px);
    // animation: fadein 0.4s 0.7s forwards;
    @include media(md, max) {
      font-size: 1.4rem;
    }
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
      transform: translate(0px, 0px);
    }
  }
}
</style>
