<template>
  <div class="container">
    <div class="l-wrap">
      <div class="l-content flex-column">
        <work-image
          :src="post.fields.headerImage.fields.file.url"
          :alt="post.fields.title"
        />
        <section class="l-section l-works">
          <h2 class="works-name">
            <span class="works-name__category">DailyUI</span>
            <span class="works-name__title">{{ post.fields.title }}</span>
          </h2>
          <div class="text-area" v-html="$md.render(post.fields.body)"></div>
        </section>
        <Pager>
          <page-previous
            :src="require('@/assets/images/work-image.png')"
            alt="作品イメージです"
            title="#002 Credit Card Checkout"
            @onClick="onClickPrev"
          />
          <page-next
            :src="require('@/assets/images/work-image.png')"
            alt="作品イメージです"
            title="#003 LandingPage"
            @onClick="onClickNext"
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
import client from '~/plugins/contentful.js'

export default {
  components: {
    WorkImage,
    BaseButton,
    Pager,
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug,
        order: '-sys.createdAt',
      })
      .then((entries) => {
        return {
          post: entries.items[0],
        }
      })
      .catch(console.error)
  },
  methods: {
    onClickPrev() {
      return console.info('前のページに移動')
    },
    onClickNext() {
      return console.info('次のページに移動')
    },
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
