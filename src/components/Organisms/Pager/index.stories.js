import Pager from './index.vue'
import PagePrevious from '~/components/Modules/PagePrevious'
import PageNext from '~/components/Modules/PageNext'

export default {
  title: 'Organisms/Pager',
  component: Pager,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Pager, PagePrevious, PageNext },
  template: `
  <Pager>
    <page-next v-bind="$props" src='images/work-image.png' alt='作品イメージです' title='#003 LandingPage' to="/next" />
    <page-previous src='images/work-image.png' alt='作品イメージです' title='#002 Credit Card Checkout' to="/prev" />
  </Pager>
  `,
})
