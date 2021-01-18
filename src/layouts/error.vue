<template>
  <div class="container">
    <div class="l-wrap">
      <div class="l-content flex-column">
        <section class="l-section">
          <h2 v-if="error.statusCode === 404" class="error-title">
            {{ error.statusCode }}<br />
            ページが見つかりませんでした
          </h2>
          <h2 v-if="error.statusCode === 500" class="error-title">
            {{ error.statusCode }}<br />
            エラーが発生しました
          </h2>
          <p v-if="error.statusCode === 404" class="error-text">
            お探しのページは削除されたかURLが間違っている可能性があります。
          </p>
          <p v-if="error.statusCode === 500" class="error-text">
            アクセスしようとしたページは表示できません。
          </p>
          <img
            class="error-illust"
            src="@/assets/images/error-illust.png"
            alt="落下するペンギンイラスト"
          />
        </section>
        <div class="l-top-button">
          <base-button size="medium" @onClick="toTop">トップに戻る</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  layout: 'error', // エラーページ用のカスタムレイアウトを指定できます
}
</script>

<style lang="scss" scoped>
.error-title {
  margin: 20px 0;
  font-size: 2.8rem;
  text-align: center;
  @include media(md, max) {
    font-size: 2rem;
  }
}
.error-text {
  margin: 20px 0;
  text-align: center;
  @include media(md, max) {
    text-align: left;
  }
}
.error-illust {
  width: 180px;
  margin: 40px auto;
  @include media(md, max) {
    width: 140px;
  }
}
</style>
