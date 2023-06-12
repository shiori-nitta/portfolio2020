import IconArrowLeft from './arrowLeft.vue'
import IconArrowRight from './arrowRight.vue'
import IconReturnTop from './returnTop.vue'

export default {
  title: 'Atoms/Icon',
  components: { IconArrowLeft, IconArrowRight },
}

export const $IconArrowLeft = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { IconArrowLeft },
  template: '<icon-arrow-left />',
})

export const $IconArrowRight = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { IconArrowRight },
  template: '<icon-arrow-right />',
})

export const $IconReturnTop = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { IconReturnTop },
  template: '<icon-return-top />',
})
