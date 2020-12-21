import CardList from './index.vue'
import WorkCard from '~/components/Modules/WorkCard'

export default {
  title: 'Organisms/CardList',
  component: CardList,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      items: [
        {
          id: '01',
          to: '/',
          src: 'images/work-image.png',
          alt: '作品イメージです',
          title: '#001 Profile',
        },
        {
          id: '02',
          to: '/',
          src: 'images/work-image.png',
          alt: '作品イメージです',
          title: '#002 Credit Card Checkout',
        },
        {
          id: '03',
          to: '/',
          src: 'images/work-image.png',
          alt: '作品イメージです',
          title: '#003 LandingPage',
        },
        {
          id: '04',
          to: '/',
          src: 'images/work-image.png',
          alt: '作品イメージです',
          title: '#004 Calculator',
        },
        {
          id: '05',
          to: '/',
          src: 'images/work-image.png',
          alt: '作品イメージです',
          title: '#005 App Icon',
        },
      ],
    }
  },
  components: { CardList, WorkCard },
  template: `
  <card-list>
    <work-card v-for="item in items" id="item.id" :to="item.to" :src="item.src" :alt="item.alt" :title="item.title" />
  </card-list>`,
})
