<template>
  <div class="pager-content">
    <figure class="pager-content__thumb">
      <img :src="src" :alt="alt" />
    </figure>
    <div class="pager-content__inner">
      <p class="pager-content__control">{{ progress }}</p>
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
  &__thumb {
    width: 20%;
    img {
      width: 100%;
    }
  }
  &__inner {
    margin-left: 20px;
  }
  &__control {
    font-size: 1.2rem;
    color: $text-color;
    @include font-en-bold;
  }
  &__title {
    margin-top: 12px;
    font-size: 1.4rem;
    color: $text-color;
    @include font-en-bold;
  }
}
</style>
