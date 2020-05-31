'use strict'

// Global mixin functions.
// https://nuxtjs.org/guide/plugins#inject-in-root-amp-context
// https://stackoverflow.com/questions/48088798/where-to-store-common-component-methods-in-nuxt-js
import Vue from 'vue'

if (process.client) {
  var Foundation = require("foundation-sites")
}

Vue.mixin({
  methods: {
    requireImage (src) {
      // Option 1: remove readme file in assets folder manually. Because in your dynamic require
      // you have specified that you may request any file that is inside ~/assets, so webpack
      // has to parse all the files it encounters there
      // return require('~/assets' + src)

      // Option 2: configure Webpack.
      // let context = require.context('~/assets', true, /^(?!.*\.(?:md)$).*/)
      // return context('.' + src)

      // Option 3: the best.
      return require('~/assets/images' + src)
    },
    // Get Z Foundation media query screen size.
    // http://foundation.zurb.com/sites/docs/javascript-utilities.html#mediaquery
    getFoundationCurrentMediaQuery () {
      return Foundation.MediaQuery.current
    }
  },

  // Danger: the console.log will now appear in every single component.
  // mounted() {
  //   console.log('hello from mixin!')
  // }
})
