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
  typoSrc: 'images/logo.svg',
  circleSrc: 'images/logo-circle.svg',
}
