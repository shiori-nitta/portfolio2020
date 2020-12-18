import Catch from './index.vue'

export default {
  title: 'Modules/Catch',
  component: Catch,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Catch },
  template: '<Catch />',
})
