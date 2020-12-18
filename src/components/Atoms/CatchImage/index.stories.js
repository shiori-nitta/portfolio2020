import CatchImage from './index.vue'

export default {
  title: 'Atoms/CatchImage',
  components: CatchImage,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { CatchImage },
  template: '<catch-image />',
})
