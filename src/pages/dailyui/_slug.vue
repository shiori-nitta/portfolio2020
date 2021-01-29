<template>
  <div class="container">
    <div class="l-works-wrap">
      <div class="l-works-content flex-column">
        <work-image
          :src="currentPost.fields.headerImage.fields.file.url"
          :alt="currentPost.fields.title"
        />
        <section class="l-section l-works">
          <h2 class="works-name">
            <span class="works-name__category">{{ category.fields.name }}</span>
            <span class="works-name__title">{{
              currentPost.fields.title
            }}</span>
          </h2>
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="text-area"
            v-html="
              $md.render(currentPost.fields.body.content[0].content[0].value)
            "
          ></div>
          <!-- eslint-enable -->
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
          <base-button size="medium" @onClick="toTop">トップに戻る</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import WorkImage from '~/components/Atoms/WorkImage'
import BaseButton from '~/components/Atoms/BaseButton'
import Pager from '~/components/Organisms/Pager'

export default {
  components: {
    WorkImage,
    BaseButton,
    Pager,
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.posts.find((post) => post.fields.slug === params.slug))
    const category = await store.state.categories.find(
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
    if (currentPost) {
      return { currentPost, category, relatedPosts, index, prevPost, nextPost }
    }
    return error({ statusCode: 400 })
  },
  computed: {
    ...mapGetters(['posts']),
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
  max-width: 848px;
  margin: auto;
  padding: 80px 24px;
  position: relative;
}
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.l-section {
  width: 100%;
}
.l-works {
  margin-top: 24px;
}
.work-image {
  width: 100%;
  max-width: 848px;
  margin: auto;
  margin-top: -160px;
  @include media(md, max) {
    margin-top: -120px;
  }
}
.works-name {
  margin: 20px 0;
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
    font-size: 2.6rem;
  }
}
.text-area {
  margin: 20px 0;
  line-height: 2;
  h1 {
    padding: 10px 0;
    font-size: 2.2rem;
    line-height: 1.6;
    border-bottom: 2px dotted lighten($text-color, 60%);
    margin: 40px 0 20px;
    @include font-bold;
    @include media(md, max) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 2rem;
    line-height: 1.6;
    padding-left: 16px;
    margin-top: 40px;
    border-left: 2px solid $text-color;
    margin: 40px 0 20px;
    @include font-bold;
  }
  h3 {
    font-size: 1.6rem;
    line-height: 1.6;
    display: flex;
    @include font-bold;
    &::before {
      display: block;
      content: '●';
      margin-right: 8px;
    }
  }
  p,
  img {
    margin: 20px 0;
  }
  img {
    width: 100%;
  }
  a {
    padding: 0;
    font-size: 1.6rem;
    line-height: 1.6;
    color: $link-color;
    text-decoration: none;
    border: none;
    background: transparent;
    position: relative;
    &::before {
      display: block;
      content: '';
      width: 100%;
      height: 1px;
      background: $link-color;
      transform: scaleX(0);
      transform-origin: bottom left;
      position: absolute;
      bottom: -4px;
      left: 0;
      transition: all 0.3s ease;
    }
    &:hover {
      &::before {
        transform: scaleX(1);
      }
    }
  }
  ul {
    margin: 20px 0;
    padding-left: 24px;
    padding: 10px 30px;
    background: lighten($text-color, 75%);
    border-radius: 4px;
    list-style-type: none;
    @include media(md, max) {
      padding: 10px 20px;
    }
    li {
      margin: 10px 0;
    }
  }
  blockquote {
    padding: 10px 30px;
    border: 1px solid lighten($text-color, 60%);
    border-radius: 4px;
  }
  code,
  em {
    @include font-bold;
  }
  table {
    width: 100%;
    margin: 30px 0;
    border-collapse: collapse;
    border: 1px solid $border-color;
    background: $white-color;
  }
  th,
  td {
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
    border-right: 1px solid $border-color;
  }
  th {
    background: lighten($text-color, 75%);
    color: $text-color;
    @include font-bold;
    line-height: 1.6;
  }
  .video {
    width: 100%;
    padding-top: 56.25%;
    position: relative;
    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
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
