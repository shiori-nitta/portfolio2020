import UserIcon from './index.vue'

export default {
  title: 'Atoms/UserIcon',
  components: UserIcon,
}

export const Template = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { UserIcon },
  template: '<user-icon v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  src: 'images/user-icon.png',
}
