module.exports = {
  mode: 'universal',

  // https://nuxtjs.org/api/configuration-router#linkactiveclass
  router: {
    linkActiveClass: 'current'
  },

  /*
  ** Headers of the page
  * https://github.com/nuxt/vue-meta
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
    // 'foundation-sites/dist/css/foundation.min.css',
    // 'foundation-icon-fonts/foundation-icons.css',
    // 'jquery-ui-bundle/jquery-ui.min.css',

    // LESS files in the project.
    'assets/less/main.less',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/utils.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  // https://axios.nuxtjs.org/options#proxy
  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:4000/wp-json/api/v1/',
      pathRewrite: {'^/api/': ''}
    }
  },

  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
      //
    }
  },

  // Generate 404 page.
  // https://nuxtjs.org/api/configuration-generate#fallback
  generate: {
    fallback: true
  }
}
