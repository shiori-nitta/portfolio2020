<template>
  <button :class="['return-button', { show: showButton }]" @click="returnTop">
    <span class="label">Page Top</span>
    <icon-return-top />
  </button>
</template>

<script>
import IconReturnTop from '~/components/Atoms/Icon/returnTop.vue'

export default {
  components: {
    IconReturnTop,
  },
  props: {
    showButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss">
.return-button {
  padding: 12px 8px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: $text-color;
  border-radius: 8px;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;

  &:hover {
    opacity: 0.7 !important;
  }

  @include media(md, max) {
    padding: 8px;
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  .label {
    font-size: 12px;
    font-weight: bold;
    transform: rotate(90deg) translateY(-2px);

    @include media(md, max) {
      display: none;
    }
  }
}
</style>
