import PagerContent from './index.vue'

export default {
  title: 'Modules/PagerContent',
  component: PagerContent,
  argTypes: {
    progress: {
      control: { type: 'select', options: ['Previous', 'Next'] },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PagerContent },
  template: '<pager-content v-bind="$props" />',
})

export const Previous = Template.bind({})
Previous.args = {
  src: 'images/work-image.png',
  alt: '作品イメージです',
  progress: 'Previous',
  title: '#002 Credit Card Checkout',
}

export const Next = Template.bind({})
Next.args = {
  src: 'images/work-image.png',
  alt: '作品イメージです',
  progress: 'Next',
  title: '#002 Credit Card Checkout',
}
