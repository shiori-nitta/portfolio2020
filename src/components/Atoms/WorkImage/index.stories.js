import WorkImage from './index.vue'

export default {
  title: 'Atoms/WorkImage',
  components: WorkImage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { WorkImage },
  template: '<work-image v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  src: 'images/work-image.png',
  alt: '作品イメージです',
}
