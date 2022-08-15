export default {
  ssr: false,

  head: {
    title: 'ida-cards-panel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  components: true,

  css: [
    'normalize.css/normalize.css',
    '~/assets/styles/main'
  ],

  plugins: [
    '~/plugins/numbers.client.js',
    '~/plugins/validate.client.js'
  ],

  modules: [
    '@nuxt/image'
  ],

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  build: {
    postcss: null
  }
}
