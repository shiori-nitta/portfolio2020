require('dotenv').config()
const client = require('./src/plugins/contentful').default

const baseTitle = 'SODA Web Designer’s Portfolio'
const baseDesc =
  '炭酸水をこよなく愛するwebデザイナーのポートフォリオサイトです。DailyUIでの制作物を投稿しており、たまにデザインや技術についても書いていこうと思います。'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  srcDir: 'src/',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: baseTitle,
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: baseDesc,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: baseTitle,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://sodasui.net/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: baseTitle,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: baseDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://sodasui.net/images/ogp/common.png',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicon/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/images/favicon/favicon.svg',
      },
      {
        rel: 'icon alternate',
        type: 'image/png',
        href: '/images/favicon/favicon.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/adobe-fonts',
    '~/plugins/contentful',
    {
      src: '~/plugins/infiniteloading',
      ssr: false,
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-gtag',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader',
  ],

  // WebFont
  webfontloader: {
    google: {
      families: ['Roboto'],
    },
  },

  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
      '@/assets/scss/mixins.scss',
      '@/assets/scss/reset.scss',
    ],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // Contentful
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  },
  // 動的ルーティング追加
  generate: {
    fallback: true,
    subFolders: false,
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        }),
      ]).then(([posts]) => {
        return [
          ...posts.items.map((post) => {
            return {
              route: `${post.fields.category.fields.slug}/${post.fields.slug}`,
              payload: post,
            }
          }),
        ]
      })
    },
  },
  markdownit: {
    injected: true, // 「$md」でどこからでも使えるようにする
    breaks: true, // 改行を<br/>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
  },
  router: {
    middleware: ['getContentful'],
  },

  'google-gtag': {
    id: process.env.GA4_ID,
    debug: true,
  },
}
