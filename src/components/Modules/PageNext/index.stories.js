import PageNext from './index.vue'

export default {
  title: 'Modules/PageNext',
  component: PageNext,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageNext },
  template: '<page-next v-bind="$props" @onClick="onClick" />',
})

export const Default = Template.bind({})
Default.args = {
  src: 'images/work-image.png',
  alt: '作品イメージです',
  title: '#003 LandingPage',
}
