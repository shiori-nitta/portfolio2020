<template>
  <nuxt-link class="page-next" @click="onClick">
    <div class="page-next__icon"><icon-arrow-right /></div>
    <pager-content :src="src" :alt="alt" progress="Next" :title="title" />
  </nuxt-link>
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
  margin-right: 20px;
}
</style>
