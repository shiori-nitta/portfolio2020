<template>
  <div class="container">
    <div class="l-wrap">
      <div class="l-content flex-column">
        <section class="l-section">
          <h2 class="title">このサイトについて</h2>
          <p class="text">
            とあるwebデザイナーのポートフォリオサイトです。<br />
            ここではDailyUIで制作したものやデザイン・コーディングについて投稿していきます。更新はゆるめです。<br />
          </p>
          <p class="text description">
            「DailyUI」とは、サイトにメールアドレスを登録して、土日を除く100日間メールでUIデザインのお題を送ってくれるサービスです。<br />
            <text-link @onClick="toDaily">DailyUI公式</text-link>
          </p>
          <div class="section profile">
            <user-icon :src="require('@/assets/images/user-icon.png')" />
            <section class="profile__info">
              <h3 class="sub-title">管理人：小谷野 詩織（ソーダー）</h3>
              <p class="text">
                広島県出身。Web制作会社に勤めているデザイナー・コーダーです。現在はリモートワークでお仕事してます。<br />
                ハーブティーと炭酸水をこよなく愛する。
              </p>
              <div class="text">
                <text-link @onClick="toTwitter">Twitter</text-link>
              </div>
            </section>
          </div>
        </section>
        <div class="l-top-button">
          <base-button size="medium" @onClick="toTop">トップに戻る</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from '~/components/Atoms/UserIcon'
import BaseButton from '~/components/Atoms/BaseButton'
import TextLink from '~/components/Atoms/TextLink'

import meta from '~/assets/mixins/meta.js'

export default {
  components: {
    UserIcon,
    BaseButton,
    TextLink,
  },
  mixins: [meta],
  data() {
    return {
      meta: {
        title: 'About',
        description:
          'とあるwebデザイナーのポートフォリオサイトです。ここではDailyUIで制作したものを投稿していきます。更新はゆるめです。たまにデザインや技術についても書いていこうと思います。',
      },
    }
  },
  methods: {
    toDaily() {
      const url = 'http://www.dailyui.co/'
      window.location.href = url
    },
    toTwitter() {
      const url = 'https://twitter.com/T0SH1KO'
      window.location.href = url
    },
    toBook() {
      const url = 'https://booklog.jp/users/cossmos'
      window.location.href = url
    },
    toMovie() {
      const url = 'https://filmarks.com/users/so00da'
      window.location.href = url
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
  margin-top: 0;
  background: $white-color;
}
.l-content {
  width: 100%;
  max-width: 672px;
  margin: auto;
  padding: 40px 24px 80px;
  position: relative;
  @include media(md, max) {
    padding: 24px 24px 80px;
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
.section {
  margin: 80px 0;
  @include media(md, max) {
    margin: 40px 0;
  }
}
.user-icon {
  border: 2px solid lighten($text-color, 75%);
}
.profile {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @include media(md, max) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__info {
    width: calc(100% - 180px);
    @include media(md, max) {
      width: 100%;
      margin: 10px 0 0;
    }
  }
}
.title {
  margin: 20px 0;
  font-size: 2rem;
  @include font-bold;
  @include media(md, max) {
    text-align: center;
  }
}
.text {
  margin: 12px 0;
  line-height: 2;
}
.description {
  margin: 20px 0;
  padding-left: 24px;
  padding: 20px 30px;
  background: lighten($text-color, 75%);
  border-radius: 4px;
  list-style-type: none;
  @include media(md, max) {
    padding: 20px;
  }
}
.sub-title {
  font-size: 1.6rem;
}
.profile-list {
  margin: 12px 0;
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
  margin: auto;
}
</style>
