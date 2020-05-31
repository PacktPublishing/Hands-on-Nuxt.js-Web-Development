'use strict'

import Vue from 'vue'

// Get ZF media query screen size.
// http://foundation.zurb.com/sites/docs/javascript-utilities.html#mediaquery
Vue.prototype.$getCurrentScreenSize = () => {
  window.addEventListener('resize', () => {
    console.log('Current screen size: ' + Foundation.MediaQuery.current)
  })
}

// Get and process the image from the assets directory.
// Option 1: remove readme file in assets folder manually. Because in your dynamic require
// you have specified that you may request any file that is inside ~/assets, so webpack
// has to parse all the files it encounters there
// return require('~/assets' + src)
// Option 2: configure Webpack.
// let context = require.context('~/assets', true, /^(?!.*\.(?:md)$).*/)
// return context('.' + src)
// Option 3: the best.
Vue.prototype.$loadAssetImage = src => require('~/assets/images' + src)
