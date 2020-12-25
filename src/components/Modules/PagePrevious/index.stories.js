import PagePrevious from './index.vue'

export default {
  title: 'Modules/PagePrevious',
  component: PagePrevious,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PagePrevious },
  template: '<page-previous v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  src: 'images/work-image.png',
  alt: '作品イメージです',
  title: '#003 LandingPage',
  to: '/',
}
