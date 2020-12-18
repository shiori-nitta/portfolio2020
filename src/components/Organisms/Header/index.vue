<template>
  <header class="header">
    <logo @onClick="onClick" />
    <navigation />
  </header>
</template>

<script>
import Logo from '~/components/Atoms/Logo'
import Navigation from '~/components/Modules/Navigation'

export default {
  components: {
    Logo,
    Navigation,
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include media(md, max) {
    padding: 24px;
  }
  .logo {
    width: 85px;
    cursor: pointer;
    @include media(md, max) {
      width: 26px;
    }
  }
}
</style>
