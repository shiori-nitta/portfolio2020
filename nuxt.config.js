export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  srcDir: 'src/',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources'],

  // WebFont
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:wght@400;700'],
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
}
