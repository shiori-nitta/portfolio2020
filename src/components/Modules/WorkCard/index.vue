<template>
  <nuxt-link :to="to" class="work-card">
    <figure class="work-card__thumb">
      <img :src="src" :alt="alt" />
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
  width: 100%;
  display: block;
  box-shadow: 2px 2px 2px darken($bg-color, 10%);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    box-shadow: 8px 8px 16px darken($bg-color, 10%);
    transform: translate(-4px, -4px);
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
