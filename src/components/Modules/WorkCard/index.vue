<template>
  <nuxt-link class="work-card" @click="onClick">
    <figure class="work-card__thumb">
      <img :src="src" :alt="alt" />
    </figure>
    <div class="work-card__body">
      <p class="work-card__category">Daily UI</p>
      <p class="work-card__title">{{ title }}</p>
    </div>
  </nuxt-link>
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
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>

<style lang="scss" scoped>
.work-card {
  width: 100%;
  display: block;
  box-shadow: 2px 2px 2px rgba(176, 233, 233, 1);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 4px 4px 12px rgba(176, 233, 233, 1);
    transform: translate(-2px, -2px);
  }
  &__thumb {
    border: 2px solid $white-color;
    img {
      width: 100%;
    }
  }
  &__body {
    padding: 16px;
    background: $white-color;
  }
  &__category {
    font-size: 1.2rem;
    color: $text-color;
    @include font-en-bold;
  }
  &__title {
    margin: 12px 0 0;
    font-size: 1.4rem;
    color: $text-color;
    @include font-en-bold;
  }
}
</style>
