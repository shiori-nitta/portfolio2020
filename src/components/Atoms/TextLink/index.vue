<template>
  <nuxt-link to="/" class="text-link" @click="onClick"><slot></slot></nuxt-link>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>

<style lang="scss" scoped>
.text-link {
  font-size: 1.4rem;
  line-height: 1.6;
  color: $link-color;
  position: relative;
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background: $link-color;
    transform: scaleX(0);
    transform-origin: bottom left;
    position: absolute;
    bottom: -4px;
    left: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    &::before {
      transform: scaleX(1);
      transform-origin: bottom right;
    }
  }
}
</style>
