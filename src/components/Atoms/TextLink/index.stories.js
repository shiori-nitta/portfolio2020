import TextLink from './index.vue'

export default {
  title: 'Atoms/TextLink',
  components: TextLink,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { TextLink },
  template: '<text-link @onClick="onClick">テキストリンク</text-link>',
})
