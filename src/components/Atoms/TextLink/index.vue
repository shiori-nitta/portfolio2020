<template>
  <button class="text-link" @click="onClick"><slot></slot></button>
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
  padding: 0;
  font-size: 1.6rem;
  line-height: 1.6;
  color: $link-color;
  text-decoration: none;
  border: none;
  background: transparent;
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
    }
  }
}
</style>
