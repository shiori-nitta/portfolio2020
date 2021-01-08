<template>
  <div class="catch">
    <div class="catch__title">
      <catch-image :typo-src="typoSrc" :circle-src="circleSrc" />
    </div>
    <transition appear name="fadein">
      <p class="catch__description">WEB DESIGNER’S PORTFOLIO</p>
    </transition>
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
    @include media(md, max) {
      font-size: 1.4rem;
    }
  }
  .fadein-enter-active,
  .fadein-leave-active {
    transition: 0.4s 0.7s ease-in-out;
  }

  .fadein-enter,
  .fadein-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
