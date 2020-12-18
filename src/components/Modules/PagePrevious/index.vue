<template>
  <nuxt-link class="page-previous" @click="onClick">
    <div class="page-previous__icon"><icon-arrow-left /></div>
    <pager-content :src="src" :alt="alt" progress="Previous" :title="title" />
  </nuxt-link>
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
  max-width: 400px;
  width: 100%;
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
