<template>
  <div class="container">
    <div class="l-card">
      <card-list>
        <work-card
          v-for="(post, i) in relatedPosts"
          :key="i"
          :to="post.fields.category.fields.slug + '/' + post.fields.slug"
          :src="post.fields.headerImage.fields.file.url"
          :alt="post.fields.title"
          :category="post.fields.category.fields.name"
          :title="post.fields.title"
        />
      </card-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WorkCard from '~/components/Modules/WorkCard'
import CardList from '~/components/Organisms/CardList'

export default {
  components: {
    WorkCard,
    CardList,
  },
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
  computed: {
    ...mapGetters(['posts']),
  },
}
</script>

<style lang="scss">
.l-card {
  padding: 0 24px;
}
</style>
