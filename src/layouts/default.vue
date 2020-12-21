<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Organisms/Header'
import Footer from '../components/Modules/Footer'

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$nextTick(function () {
      this.$adobeFonts(document)
    })
  },
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  background: $bg-color;
  /* webfontチラツキ防止 */
  visibility: hidden;
}
html.wf-active {
  /* webfontチラツキ防止 */
  visibility: visible;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
