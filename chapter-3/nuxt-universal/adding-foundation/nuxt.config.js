const pkg = require('./package')
// const path = require("path")

export default {
  mode: 'universal',

  /*
  ** Headers of the page
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
      // { src: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/motion-ui/2.0.3/motion-ui.js' },
    ],
    link: [
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css' },
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
    'foundation-sites/dist/css/foundation.min.css',
    'foundation-icon-fonts/foundation-icons.css',

    // SCSS files in the project
    'assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/utils.js',
    '~/plugins/client-only/foundation.client.js', // only in client side
    '~/plugins/client-only/motion-ui.client.js', // only in client side
  ],

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
