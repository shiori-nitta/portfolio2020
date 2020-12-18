import UserIcon from './index.vue'

export default {
  title: 'Atoms/UserIcon',
  components: UserIcon,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { UserIcon },
  template: '<user-icon />',
})
