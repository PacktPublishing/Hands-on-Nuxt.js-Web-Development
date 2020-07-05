const pkg = require('./package')
// const path = require("path")

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
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      // { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js' },
    ],
    link: [
      // { rel: 'stylesheet', href: 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },

  /*
  ** Global CSS
  */
  css: [
    'jquery-ui-bundle/jquery-ui.min.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/client-only/jquery-ui-bundle.client.js', // only in client side
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
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // config.resolve.modules.push(path.resolve(__dirname, "./node_modules/motion-ui/src"))
      // console.log(config.resolve.modules)
    }
  }
}
