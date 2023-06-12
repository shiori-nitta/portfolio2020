import ReturnTopButton from './index.vue'

export default {
  title: 'Atoms/ReturnTopButton',
  components: ReturnTopButton,
}

export const Default = ({ argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ReturnTopButton },
  template: '<return-top-button />',
})
