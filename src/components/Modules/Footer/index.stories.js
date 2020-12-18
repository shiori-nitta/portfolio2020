import Footer from './index.vue'

export default {
  title: 'Modules/Footer',
  component: Footer,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<Footer />',
})
