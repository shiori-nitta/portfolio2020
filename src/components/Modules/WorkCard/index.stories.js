import WorkCard from './index.vue'

export default {
  title: 'Modules/WorkCard',
  component: WorkCard,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { WorkCard },
  template: '<work-card v-bind="$props" @onClick="onClick" />',
})

export const Default = Template.bind({})
Default.args = {
  src: 'images/work-image.png',
  alt: '作品イメージです',
  title: '#001 Profile',
}
