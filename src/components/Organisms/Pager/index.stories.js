import Pager from './index.vue'
import PagePrevious from '~/components/Modules/PagePrevious'
import PageNext from '~/components/Modules/PageNext'

export default {
  title: 'Organisms/Pager',
  component: Pager,
  argTypes: {
    onClickPrev: { action: 'prev clicked' },
    onClickNext: { action: 'next clicked' },
  },
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Pager, PagePrevious, PageNext },
  template: `
  <Pager>
    <page-previous src='images/work-image.png' alt='作品イメージです' title='#002 Credit Card Checkout' @onClick="onClickPrev" />
    <page-next v-bind="$props" src='images/work-image.png' alt='作品イメージです' title='#003 LandingPage' @onClick="onClickNext" />
  </Pager>
  `,
})
