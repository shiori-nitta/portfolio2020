<template>
  <button class="page-next" @click="onClick">
    <div class="page-next__icon"><icon-arrow-right /></div>
    <pager-content :src="src" :alt="alt" progress="Next" :title="title" />
  </button>
</template>

<script>
import IconArrowRight from '~/components/Atoms/Icon/arrowRight.vue'
import PagerContent from '~/components/Modules/PagerContent'

export default {
  components: {
    IconArrowRight,
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
.page-next {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
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
      transform-origin: bottom right;
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
  margin-right: 20px;
}
</style>
