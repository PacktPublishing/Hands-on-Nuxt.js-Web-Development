const pkg = require('./package')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  // target: 'server',
  target: 'static',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'LAU TIAM KOK | PORTFOLIO',
    titleTemplate: ' %s | LAU TIAM KOK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'LAU TIAM KOK, aka LAU THIAM KOK is a cross-disciplinary Web Developer/Designer, Data Architect and Analyst.' }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      // { src: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/js/foundation.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/motion-ui/2.0.3/motion-ui.js' },
    ],
    link: [
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/css/foundation.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#000000'
  },

  /*
  ** Global CSS
  */
  css: [
    'foundation-sites/dist/css/foundation.min.css',
    'foundation-icon-fonts/foundation-icons.css',
    'swiper/css/swiper.css',
    // 'jquery-ui-bundle/jquery-ui.min.css',

    // LESS files in the project.
    'assets/less/nuxt-transitions.less',
    'assets/less/main.less',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/utils.js',
    '~/plugins/client-only/foundation.client.js', // only in client side
    '~/plugins/client-only/swiper.client.js', // only in client side
    '~/plugins/client-only/aos.client.js', // only in client side
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here.
    * The extend is called twice, one time for the server bundle, and one time for the client bundle.
    * https://nuxtjs.org/api/configuration-build#extend
    * To see more about the default webpack configuration:
    * https://github.com/nuxt/nuxt.js/tree/dev/packages/webpack/src/config
    */
    extend(config, ctx) {
      // if (ctx.isDev) {
      //   config.module.rules.push({
      //     test: /\.worker\.js$/,
      //     use: [
      //       'style-loader',
      //       'css-loader'
      //     ],
      //   })
      // }

      // Uncomment line below to view webpack rules
      // console.dir(config.module.rules)
    }
  },

  // Global setting for page components.
  // https://nuxtjs.org/api/configuration-transition
  pageTransition: {
    name: 'bounce',
    mode: 'out-in',
  },

  // Global setting for layouts.
  // https://nuxtjs.org/api/configuration-transition
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },

  // Generate 404 page.
  // https://nuxtjs.org/api/configuration-generate#fallback
  generate: {
    fallback: true
  }
}
