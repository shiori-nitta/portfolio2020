<template>
  <div class="container">
    <div class="l-wrap">
      <div class="l-content flex-column">
        <work-image
          :src="require('@/assets/images/work-image.png')"
          alt="作品イメージです"
        />
        <section class="l-section l-works">
          <h2 class="works-name">
            <span class="works-name__category">DailyUI</span>
            <span class="works-name__title">#001 Profile</span>
          </h2>
          <p class="text">
            まずはどういったアプリのSignUp画面なのかを考える必要があったので、今回は「家計簿アプリ」で設定。<br />
            <br />
            家計簿アプリはかっちりしたアプリが多いイメージだったので親しみがもてるライトな家計簿アプリを想定。<br />
            ターゲットは主婦層などの女性。<br />
            <br />
            家計簿 → 財布 → がま口 →かえる🐸<br />
            かえるのキャラクターを採用<br />
            <br />
            ワイヤーなど設計する時点で必要な要素の選出やテキストの内容も考えるようだったので想像してたより時間がかかった。。
          </p>
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
import WorkImage from '../components/Atoms/WorkImage'
import BaseButton from '../components/Atoms/BaseButton'
import Pager from '../components/Organisms/Pager'

export default {
  components: {
    WorkImage,
    BaseButton,
    Pager,
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
.text {
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
