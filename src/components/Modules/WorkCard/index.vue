<template>
  <nuxt-link :to="to" class="work-card">
    <figure class="work-card__thumb">
      <img :src="src" :alt="alt" loading="lazy" />
    </figure>
    <div class="work-card__body">
      <p class="work-card__category">{{ category }}</p>
      <p class="work-card__title">{{ title }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.work-card {
  display: block;
  filter: drop-shadow(1px 2px 4px darken($bg-color, 10%));
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0, 0.55, 0.45, 1);
  &:hover {
    filter: drop-shadow(1px 2px 4px darken($bg-color, 10%))
      drop-shadow(2px 4px 8px darken($bg-color, 10%))
      drop-shadow(4px 8px 16px darken($bg-color, 10%));
    transform: translate(-5px, -5px);
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
    margin: 8px 0 0;
    font-size: 1.6rem;
    color: $text-color;
    @include font-en-bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
