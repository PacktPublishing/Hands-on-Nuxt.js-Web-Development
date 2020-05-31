import webpack from 'webpack'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    },
    // add webpack plugins
    // configure jQuery as a webpack plugin
    // https://nuxtjs.org/faq/webpack-plugins/
    // https://kaloraat.com/articles/how-to-use-jquery-in-nuxtjs
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ]
  },
  pageTransition: {
    mode: 'out-in',
    css: false,
    beforeEnter: el => {
      console.log('global: before enter')
      $(el).hide()
    },
    enter: (el, done) => {
      console.log('global: enter')
      $(el).fadeTo(1000, 1)
      done()
    },
    afterEnter: el => {
      console.log('global:after enter')
    },
    leave: (el, done) => {
      console.log('global: leave')
      $(el).fadeTo(1000, 0, () => {
        $(el).hide()
      })
      done()
    },
    afterLeave: el => {
      console.log('global: after leave')
      $(el).hide()
    }
  }
  // pageTransition: {
  //   mode: 'out-in',
  //   css: false,
  //   beforeEnter(el) {
  //     console.log('global: before enter')
  //     $(el).hide()
  //   },
  //   enter(el, done) {
  //     console.log('global: enter')
  //     $(el).fadeTo(1000, 1)
  //     done()
  //   },
  //   afterEnter(el) {
  //     console.log('global: after enter')
  //   },
  //   leave(el, done) {
  //     console.log('global: leave')
  //     $(el).fadeTo(1000, 0, () => {
  //       $(el).hide()
  //     })
  //     done()
  //   },
  //   afterLeave(el) {
  //     console.log('global: after leave')
  //     $(el).hide()
  //   }
  // }
}
