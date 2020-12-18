import PagePrevious from './index.vue'

export default {
  title: 'Modules/PagePrevious',
  component: PagePrevious,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PagePrevious },
  template: '<page-previous v-bind="$props" @onClick="onClick" />',
})

export const Default = Template.bind({})
Default.args = {
  src: 'images/work-image.png',
  alt: '作品イメージです',
  title: '#002 Credit Card Checkout',
}
