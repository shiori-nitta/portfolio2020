import TextLink from './index.vue'

export default {
  title: 'Atoms/TextLink',
  components: TextLink,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextLink },
  template: '<text-link v-bind="$props">テキストリンク</text-link>',
})

export const Default = Template.bind({})
Default.args = {
  to: 'https://nuxtjs.org',
}
