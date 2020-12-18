import Navigation from './index.vue'

export default {
  title: 'Modules/Navigation',
  component: Navigation,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Navigation },
  template: '<navigation @onClick="onClick" />',
})
