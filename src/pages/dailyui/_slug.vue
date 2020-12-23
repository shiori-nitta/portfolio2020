<template>
  <div class="container">
    <div class="l-wrap">
      <div class="l-content flex-column">
        <work-image
          :src="currentPost.fields.headerImage.fields.file.url"
          :alt="currentPost.fields.title"
        />
        <section class="l-section l-works">
          <h2 class="works-name">
            <span class="works-name__category">DailyUI</span>
            <span class="works-name__title">{{
              currentPost.fields.title
            }}</span>
          </h2>
          <div
            class="text-area"
            v-html="$md.render(currentPost.fields.body)"
          ></div>
        </section>
        <Pager>
          <page-previous
            v-if="prevPost"
            :src="prevPost.fields.headerImage.fields.file.url"
            :alt="prevPost.fields.title"
            :title="prevPost.fields.title"
            :to="prevPost.fields.slug"
          />
          <page-next
            v-if="nextPost"
            :src="nextPost.fields.headerImage.fields.file.url"
            :alt="nextPost.fields.title"
            :title="nextPost.fields.title"
            :to="nextPost.fields.slug"
          />
        </Pager>
        <div class="l-home-button">
          <base-button size="medium" @onClick="toTop">ホームに戻る</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    const index =
      payload ||
      (await store.state.posts.findIndex(
        (post) => post.fields.slug === currentPost.fields.slug
      ))
    const length = payload || (await store.state.posts.length)
    const prev = index - 1
    const next = index + 1
    const prevPost = store.state.posts[prev]
    const nextPost = store.state.posts[next]
    if ((currentPost, prevPost, nextPost)) {
      return { currentPost, prevPost, nextPost }
    }
    if ((currentPost, next === length)) {
      // 一番古い記事も400になるので救済
      return { currentPost, prevPost, nextPost }
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
.l-wrap {
  width: 100%;
  margin-top: 80px;
  background: $white-color;
  @include media(md, max) {
    margin-top: 40px;
  }
}
.l-content {
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
    @include font-en-bold;
    font-size: 1.2rem;
  }
  &__title {
    display: block;
    margin-top: 4px;
    @include font-en-bold;
    font-size: 2rem;
  }
}
.text-area {
  margin: 20px 0;
  line-height: 2;
  h1 {
    font-size: 1.8rem;
    padding-left: 16px;
    margin-top: 40px;
    border-left: 2px solid $text-color;
  }
  h2 {
    font-size: 1.6rem;
    display: flex;
    &::before {
      display: block;
      content: '●';
      margin-right: 8px;
    }
  }
  p {
    margin: 20px 0;
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
  }
  blockquote {
    padding: 10px 30px;
    background: lighten($text-color, 75%);
    border-radius: 4px;
  }
}
.pager {
  margin: 40px 0;
}
.l-home-button {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.base-button {
  max-width: 240px;
  width: 100%;
}
</style>
