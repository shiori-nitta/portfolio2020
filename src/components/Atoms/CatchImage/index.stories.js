import CatchImage from './index.vue'

export default {
  title: 'Atoms/CatchImage',
  components: CatchImage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CatchImage },
  template: '<catch-image v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  typo_src: 'images/logo.svg',
  circle_src: 'images/logo-circle.svg',
}
