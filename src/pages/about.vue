<template>
  <div class="container">
    <div class="l-wrap">
      <div class="l-content flex-column">
        <user-icon :src="require('@/assets/images/user-icon.png')" />
        <section class="l-section">
          <h2 class="title">このサイトについて</h2>
          <p class="text">
            とあるwebデザイナーのポートフォリオサイトです。<br />
            ここではDailyUIで制作したものを投稿していきます。更新はゆるめです。<br />
          </p>
          <p class="text description">
            「DailyUI」とは、サイトにメールアドレスを登録して、土日を除く100日間メールでUIデザインのお題を送ってくれるサービスです。<br />
            <text-link @onClick="toDaily">DailyUI公式</text-link>
          </p>
          <section class="section">
            <h3 class="sub-title">管理人：ソーダー</h3>
            <p class="text">
              広島県出身。都内のweb制作会社に勤めており、現在はリモートワークでお仕事してます。<br />
              最近はデザインの他にフロントエンドも少しずつ勉強中。<br />
              趣味の読書と映画鑑賞はたまに感想を書いてます。
            </p>
            <div class="text">
              <text-link @onClick="toTwitter">Twitter</text-link>
              <dl class="profile-list">
                <dt>読書：<text-link @onClick="toBook">ブクログ</text-link></dt>
                <dt>
                  映画：<text-link @onClick="toMovie">Filmarks</text-link>
                </dt>
              </dl>
            </div>
          </section>
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

export default {
  components: {
    UserIcon,
    BaseButton,
    TextLink,
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
.section {
  margin: 40px 0;
}
.user-icon {
  margin-top: -160px;
  @include media(md, max) {
    margin-top: -120px;
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
  padding: 20px;
  background: lighten($text-color, 75%);
  border-radius: 4px;
  list-style-type: none;
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
