'use strict'

// Function or plugin to be registered before Vue.js init and executed
// later.

console.log('plugins/mixins.js: process.env.remoteUrl =', process.env.remoteUrl)

import Vue from 'vue'
Vue.mixin({
  data () {
    return {
      remoteUrl: process.env.remoteUrl,
    }
  }
})
