import ArticleArea from './index.vue'

export default {
  title: 'Atoms/ArticleArea',
  components: ArticleArea,
}

export const Default = ({ argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleArea },
  template: '<article-area />',
})
