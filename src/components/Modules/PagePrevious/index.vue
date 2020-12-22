<template>
  <button class="page-previous" @click="onClick">
    <div class="page-previous__icon"><icon-arrow-left /></div>
    <pager-content :src="src" :alt="alt" progress="Previous" :title="title" />
  </button>
</template>

<script>
import IconArrowLeft from '~/components/Atoms/Icon/arrowLeft.vue'
import PagerContent from '~/components/Modules/PagerContent'

export default {
  components: {
    IconArrowLeft,
    PagerContent,
  },
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
.page-previous {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.7s ease;
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    background: $text-color;
    transform: scaleX(0);
    transform-origin: bottom left;
    position: absolute;
    bottom: 0px;
    left: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }
  &__icon {
    width: 24px;
    height: 24px;
    color: $text-color;
    svg {
      width: 100%;
    }
  }
}
.pager-content {
  width: calc(100% - 44px);
  margin-left: 20px;
}
</style>
