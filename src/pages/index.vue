<template>
  <div class="container">
    <Catch />
    <div class="l-card">
      <card-list>
        <work-card
          v-for="(post, i) in posts"
          :key="i"
          :to="post.fields.slug"
          :src="post.fields.headerImage.fields.file.url"
          :alt="post.fields.title"
          :title="post.fields.title"
        />
      </card-list>
    </div>
  </div>
</template>

<script>
import Catch from '~/components/Modules/Catch'
import WorkCard from '~/components/Modules/WorkCard'
import CardList from '~/components/Organisms/CardList'
import client from '~/plugins/contentful.js'

export default {
  components: {
    Catch,
    WorkCard,
    CardList,
  },
  async asyncData({ env }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      })
      .then((res) => {
        return {
          posts: res.items,
        }
      })
      .catch(console.error)
  },
  data() {
    return {
      items: [
        {
          id: '01',
          to: '/',
          src: require('@/assets/images/work-image.png'),
          alt: '作品イメージです',
          title: '#001 Profile',
        },
        {
          id: '02',
          to: '/',
          src: require('@/assets/images/work-image.png'),
          alt: '作品イメージです',
          title: '#002 Credit Card Checkout',
        },
        {
          id: '03',
          to: '/',
          src: require('@/assets/images/work-image.png'),
          alt: '作品イメージです',
          title: '#003 LandingPage',
        },
        {
          id: '04',
          to: '/',
          src: require('@/assets/images/work-image.png'),
          alt: '作品イメージです',
          title: '#004 Calculator',
        },
        {
          id: '05',
          to: '/',
          src: require('@/assets/images/work-image.png'),
          alt: '作品イメージです',
          title: '#005 App Icon',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.l-card {
  padding: 0 24px;
}
</style>
