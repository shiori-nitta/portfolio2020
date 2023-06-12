<template>
  <div class="container">
    <div class="l-card">
      <transition appear name="fadein">
        <card-list>
          <work-card
            v-for="(post, i) in displayPosts"
            :key="i"
            :to="post.fields.category.fields.slug + '/' + post.fields.slug"
            :src="post.fields.headerImage.fields.file.url"
            :alt="post.fields.title"
            :category="post.fields.category.fields.name"
            :title="post.fields.title"
          />
        </card-list>
      </transition>
      <infinite-loading
        ref="infiniteLoading"
        spinner="spiral"
        @infinite="infiniteHandler"
      >
        <span slot="no-more"></span>
        <span slot="no-results"></span>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WorkCard from '~/components/Modules/WorkCard'
import CardList from '~/components/Organisms/CardList'

import meta from '~/assets/mixins/meta.js'

export default {
  name: 'InfiniteScroll',
  components: {
    WorkCard,
    CardList,
  },
  mixins: [meta],
  async asyncData({ payload, store, error }) {
    const currentPost =
      payload ||
      (await store.getters.posts.find(
        (post) => post.fields.category.fields.slug === 'dailyui'
      ))
    const category = await store.getters.categories.find(
      (cat) => cat.fields.slug === currentPost.fields.category.fields.slug
    )
    const relatedPosts = await store.getters.relatedPosts(category)
    if (currentPost) {
      return { currentPost, category, relatedPosts }
    }
    return error({ statusCode: 400 })
  },
  data() {
    return {
      meta: {
        title: 'DailyUI',
        description:
          '炭酸水をこよなく愛するWebデザイナーが制作したDailyUIの一覧です。',
      },
      displayPosts: [],
      pageIndex: 0,
      perPage: 12,
    }
  },
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        this.pageIndex++
        this.displayPosts = this.relatedPosts.slice(
          0,
          (this.pageIndex + 1) * this.perPage
        )
        if (this.displayPosts.length !== this.relatedPosts.length) {
          $state.loaded()
        } else {
          $state.complete()
        }
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
.l-card {
  padding: 0 40px;

  @include media(md, max) {
    padding: 0 24px;
  }
}
</style>
