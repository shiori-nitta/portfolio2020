<template>
  <div class="container">
    <div class="l-wrap">
      <div class="l-content flex-column">
        <user-icon :src="require('@/assets/images/user-icon.png')" />
        <section class="section">
          <h2 class="user-name">ソーダー</h2>
          <p class="text">
            都内で働くWebデザイナー。現在リモートワーク中。このサイトはDaily
            UIで制作したものをアップしていきます。
          </p>
          <p class="text">
            使用するデザインツール<br />
            Figma / Illastrator / Photoshop / Xd /
          </p>
          <p class="text">
            広島県出身。<br />
            ネコととカリカリ梅とカレーが好き。たまに読書と映画の感想を書いたりしてます。
          </p>
          <div class="text">
            <text-link @onClick="toTwitter">Twitter</text-link>
            <dl>
              <dt>読書：<text-link @onClick="toBook">ブクログ</text-link></dt>
              <dt>映画：<text-link @onClick="toMovie">Filmarks</text-link></dt>
            </dl>
          </div>
        </section>
        <base-button size="medium" @onClick="toTop">ホームに戻る</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from '../components/Atoms/UserIcon'
import BaseButton from '../components/Atoms/BaseButton'
import TextLink from '../components/Atoms/TextLink'

export default {
  components: {
    UserIcon,
    BaseButton,
    TextLink,
  },
  methods: {
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
.user-icon {
  margin-top: -160px;
  @include media(md, max) {
    margin-top: -120px;
  }
}
.user-name {
  margin: 20px 0;
  font-size: 1.8rem;
  @include font-bold;
  @include media(md, max) {
    text-align: center;
  }
}
.text {
  margin: 20px 0;
  line-height: 2;
}
.base-button {
  max-width: 240px;
  width: 100%;
  margin: auto;
}
</style>
