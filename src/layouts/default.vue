<template>
  <div>
    <Header @onClick="toTop" />
    <Nuxt />
    <ReturnTopButton :show-button="showButton" />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Organisms/Header'
import Footer from '../components/Modules/Footer'
import ReturnTopButton from '../components/Atoms/ReturnTopButton'

export default {
  components: {
    Header,
    Footer,
    ReturnTopButton,
  },
  data() {
    return {
      showButton: false,
    }
  },
  mounted() {
    // スクロールイベントの追加
    window.addEventListener('scroll', this.handleScroll)

    this.$nextTick(function () {
      this.$adobeFonts(document)
    })
    let q = document.createElement('div')
    q.innerHTML =
      '<style>.bubble{position:fixed;background:rgba(255,255,255,0.1);border:thin solid rgba(255,255,255,0.7);border-radius:100%;box-shadow: 0 0 3px 1px rgba(255,255,255,0.4);overflow:hidden;}' +
      '.bubble::after{content:“”;display:block;height:5px;width:5px;border-radius:2px;background:rgba(255,255,255,0.7);}</style>'
    q.id = 'bubbleparticle'
    document.body.appendChild(q)
    q = document.getElementById('bubbleparticle')
    document.body.style.overflowX = 'hidden'
    const h = window.innerHeight
    const u = document.documentElement.scrollTop || document.body.scrollTop
    const z = -9999
    const t = []
    const l = []
    const y = []
    const s = []
    const g = []
    const c = []
    for (let i = 0; i < 40; i++) {
      const m = document.createElement('div')
      m.id = 'awa' + i
      t[i] = Math.random() * (h + u) + u
      l[i] = Math.random() * window.innerWidth
      const p = Math.random() * 8 + 6
      m.setAttribute(
        'style',
        'z-index:' +
          (z + i) +
          ';top:' +
          t[i] +
          'px;width:' +
          p +
          'px;height:' +
          p +
          'px;left:' +
          l +
          'px;'
      )
      m.setAttribute('class', 'bubble')
      q.appendChild(m)
      y[i] = Math.random() * 25 + 0.1
      s[i] = Math.random() * 5 + 5
      g[i] = document.getElementById('awa' + i)
      c[i] = 0
    }
    setInterval(function () {
      for (let i = 0; i < 40; i++) {
        if (u < t[i]) {
          if (y[i] >= c[i]) {
            l[i] = l[i] + 0.5 + Math.random() * 0.5
          } else {
            l[i] = l[i] - 0.5 - Math.random() * 0.5
          }
          if (y[i] * 2 <= c[i]) {
            c[i] = 0
          }
        } else {
          t[i] = u + h + 10
          l[i] = Math.random() * window.innerWidth
        }
        t[i] = t[i] - s[i]
        g[i].style.top = t[i] + 'px'
        g[i].style.left = l[i] + 'px'
        c[i]++
      }
    }, 50)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toTop() {
      return this.$router.push(`/`)
    },
    handleScroll() {
      this.showButton = window.pageYOffset > 100
    },
  },
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  background: linear-gradient($bg-color, darken($bg-color, 5%));
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

body {
  font-size: 1.6rem;
  @include font-normal;
  color: $text-color;
}

.return-button {
  position: fixed;
  bottom: 8px;
  right: -8px;

  @include media(md, max) {
    bottom: 8px;
    right: 0;
  }
}

.page-enter-active {
  transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1),
    filter 0.6s ease, transform 0.6s ease;
}
.page-leave-active {
  transition: opacity 0.6s ease, filter 0.6s ease, transform 0.3s ease;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  filter: blur(5px);
}
.page-enter {
  transform: translateY(20px);
}
.page-leave-to {
  transform: translateY(-20px);
}
</style>
