<template>
  <div class="container">
    <Catch />
    <div class="l-card">
      <transition appear name="fadein">
        <card-list>
          <work-card
            v-for="(post, i) in posts"
            :key="i"
            :to="'dailyui/' + post.fields.slug"
            :src="post.fields.headerImage.fields.file.url"
            :alt="post.fields.title"
            :category="post.fields.category"
            :title="post.fields.title"
          />
        </card-list>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Catch from '~/components/Modules/Catch'
import WorkCard from '~/components/Modules/WorkCard'
import CardList from '~/components/Organisms/CardList'

export default {
  components: {
    Catch,
    WorkCard,
    CardList,
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
.fadein-enter-active,
.fadein-leave-active {
  transition: 0.4s 0.9s ease-in-out;
}

.fadein-enter,
.fadein-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
