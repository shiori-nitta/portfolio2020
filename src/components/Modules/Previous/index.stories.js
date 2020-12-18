import Previous from './index.vue'

export default {
  title: 'Modules/Previous',
  component: Previous,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Previous },
  template: '<Previous v-bind="$props" @onClick="onClick" />',
})

export const Default = Template.bind({})
Default.args = {
  src: 'images/work-image.png',
  alt: '作品イメージです',
  title: '#002 Credit Card Checkout',
}
