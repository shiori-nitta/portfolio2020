<template>
  <div class="container">
    <Catch
      :typo-src="require('@/assets/images/logo.svg')"
      :circle-src="require('@/assets/images/logo-circle.svg')"
    />
    <div class="l-card">
      <card-list>
        <work-card
          v-for="(post, i) in posts"
          :key="i"
          :to="'dailyui/' + post.fields.slug"
          :src="post.fields.headerImage.fields.file.url"
          :alt="post.fields.title"
          :title="post.fields.title"
        />
      </card-list>
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
</style>
