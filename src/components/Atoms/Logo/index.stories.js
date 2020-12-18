import Logo from './index.vue'

export default {
  title: 'Atoms/Logo',
  components: Logo,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<logo @onClick="onClick" />',
})
