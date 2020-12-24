import Catch from './index.vue'

export default {
  title: 'Modules/Catch',
  component: Catch,
}

const Template = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Catch },
  template: '<Catch v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  typo_src: 'images/logo.svg',
  circle_src: 'images/logo-circle.svg',
}
