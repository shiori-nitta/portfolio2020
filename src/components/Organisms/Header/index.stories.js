import Header from './index.vue'

export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: '<Header @onClick="onClick" />',
})
