<template>
  <button :class="classes" @click="onClick"><slot></slot></button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        [`base-button`]: true,
        [`base-button--${this.size}`]: true,
      }
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
.base-button {
  background: $primary-color;
  color: $white-color;
  text-align: center;
  font-weight: bold;
  @include font-bold;
  border: 2px solid $primary-color;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 0;
  backface-visibility: hidden;
  transition: all 0.3s ease;
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: $white-color;
    transform: scaleX(0);
    transform-origin: bottom left;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }
  &:hover {
    color: $primary-color;
    &::before {
      transform: scaleX(1);
    }
  }
  &--small {
    padding: 10px;
    font-size: 1.2rem;
  }
  &--medium {
    padding: 20px;
    font-size: 1.6rem;
  }
  &--large {
    padding: 30px;
    font-size: 2rem;
  }
}
</style>
