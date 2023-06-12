<template>
  <div class="container">
    <Catch />
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
import Catch from '~/components/Modules/Catch'
import WorkCard from '~/components/Modules/WorkCard'
import CardList from '~/components/Organisms/CardList'

export default {
  name: 'InfiniteScroll',
  components: {
    Catch,
    WorkCard,
    CardList,
  },
  data() {
    return {
      displayPosts: [],
      pageIndex: 0,
      perPage: 12,
    }
  },
  computed: {
    ...mapGetters(['posts', 'categories']),
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        this.pageIndex++
        this.displayPosts = this.posts.slice(
          0,
          (this.pageIndex + 1) * this.perPage
        )
        if (this.displayPosts.length !== this.posts.length) {
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
.fadein-enter-active,
.fadein-leave-active {
  transition: 0.4s 1s ease-in-out;
}

.fadein-enter,
.fadein-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
