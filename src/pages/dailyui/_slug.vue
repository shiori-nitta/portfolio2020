<template>
  <div class="container">
    <div class="l-works-wrap">
      <div class="l-works-content flex-column">
        <work-image
          :src="currentPost.fields.headerImage.fields.file.url"
          :alt="currentPost.fields.title"
        />
        <div class="l-works-article">
          <section class="l-section l-works">
            <h2 class="works-name">
              <span class="works-name__category">{{
                category.fields.name
              }}</span>
              <span class="works-name__title">{{
                currentPost.fields.title
              }}</span>
            </h2>
            <article-area>
              <!-- eslint-disable vue/no-v-html -->
              <div v-html="$md.render(currentPost.fields.body)"></div>
              <!-- eslint-enable -->
            </article-area>
          </section>
          <Pager>
            <page-next
              v-if="nextPost"
              :src="nextPost.fields.headerImage.fields.file.url"
              :alt="nextPost.fields.title"
              :title="nextPost.fields.title"
              :to="nextPost.fields.slug"
            />
            <page-previous
              v-if="prevPost"
              :src="prevPost.fields.headerImage.fields.file.url"
              :alt="prevPost.fields.title"
              :title="prevPost.fields.title"
              :to="prevPost.fields.slug"
            />
          </Pager>
          <div class="l-top-button">
            <base-button size="medium" @onClick="toTop"
              >トップに戻る</base-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkImage from '~/components/Atoms/WorkImage'
import BaseButton from '~/components/Atoms/BaseButton'
import Pager from '~/components/Organisms/Pager'
import PagePrevious from '~/components/Modules/PagePrevious'
import PageNext from '~/components/Modules/PageNext'
import ArticleArea from '~/components/Atoms/ArticleArea'

import meta from '~/assets/mixins/meta.js'

export default {
  components: {
    WorkImage,
    BaseButton,
    Pager,
    PagePrevious,
    PageNext,
    ArticleArea,
  },
  mixins: [meta],
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.getters.posts.find(
        (post) => post.fields.slug === params.slug
      ))
    const category = await store.getters.categories.find(
      (cat) => cat.fields.slug === currentPost.fields.category.fields.slug
    )
    const relatedPosts = await store.getters.relatedPosts(category)
    const index =
      payload ||
      relatedPosts.findIndex(
        (post) => post.fields.slug === currentPost.fields.slug
      )
    const prev = index + 1
    const next = index - 1
    const prevPost = relatedPosts[prev]
    const nextPost = relatedPosts[next]
    // meta設定
    const title = currentPost.fields.title
    const description =
      currentPost.fields.description ||
      `お題、${currentPost.fields.title}の制作ページです`
    if (currentPost) {
      return {
        currentPost,
        category,
        relatedPosts,
        index,
        prevPost,
        nextPost,
        meta: { title, description },
      }
    }
    return error({ statusCode: 400 })
  },
  methods: {
    toTop() {
      return this.$router.push(`/`)
    },
  },
}
</script>

<style lang="scss">
.l-works-wrap {
  width: 100%;
  margin-top: 80px;
  background: $white-color;
  @include media(md, max) {
    margin-top: 40px;
  }
}
.l-works-content {
  width: 100%;
  max-width: 1042px;
  margin: auto;
  padding: 80px 24px;
  position: relative;
}
.l-works-article {
  width: 100%;
  max-width: 672px;
  margin: 40px auto 0;
  @include media(md, max) {
    margin: 24px auto 0;
  }
}
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.l-section {
  width: 100%;
}
.work-image {
  width: 100%;
  margin: auto;
  margin-top: -160px;
  @include media(md, max) {
    margin-top: -120px;
  }
}
.works-name {
  &__category {
    display: block;
    margin: 10px 0;
    @include font-en-bold;
    font-size: 1.6rem;
  }
  &__title {
    display: block;
    margin-top: 4px;
    @include font-en-bold;
    font-size: 2.8rem;
  }
}
.pager {
  margin: 40px 0;
}
.l-top-button {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.base-button {
  max-width: 240px;
  width: 100%;
}
</style>
