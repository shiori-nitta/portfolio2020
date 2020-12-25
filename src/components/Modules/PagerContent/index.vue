<template>
  <div class="pager-content">
    <figure class="pager-content__thumb">
      <img :src="src" :alt="alt" />
    </figure>
    <div class="pager-content__inner">
      <p class="pager-content__progress">{{ progress }}</p>
      <p class="pager-content__title">{{ title }}</p>
    </div>
  </div>
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
    progress: {
      type: String,
      default: 'Previous',
      validator(value) {
        return ['Previous', 'Next'].includes(value)
      },
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.pager-content {
  display: flex;
  align-items: center;
  @include media(md, max) {
    flex-direction: column;
    align-items: flex-start;
  }
  &__thumb {
    width: 144px;
    @include media(md, max) {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
  &__inner {
    width: calc(100% - 164px);
    margin: 0 0 0 20px;
    @include media(md, max) {
      width: 100%;
      margin: 8px 0 0;
    }
  }
  &__progress {
    font-size: 1.2rem;
    color: $text-color;
    @include font-en-bold;
    text-align: left;
  }
  &__title {
    margin-top: 12px;
    font-size: 1.4rem;
    color: $text-color;
    @include font-en-bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @include media(md, max) {
      margin-top: 8px;
    }
  }
}
</style>
