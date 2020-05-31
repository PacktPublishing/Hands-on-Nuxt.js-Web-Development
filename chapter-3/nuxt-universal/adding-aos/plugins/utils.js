'use strict'

import Vue from 'vue'

// Get ZF media query screen size.
// http://foundation.zurb.com/sites/docs/javascript-utilities.html#mediaquery
Vue.prototype.$getCurrentScreenSize = () => {
  window.addEventListener('resize', () => {
    console.log('Current screen size: ' + Foundation.MediaQuery.current)
  })
}
