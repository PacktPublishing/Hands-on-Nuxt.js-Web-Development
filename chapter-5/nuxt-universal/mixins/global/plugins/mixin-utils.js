'use strict'

import Vue from 'vue'

Vue.mixin({
  methods: {
    loadAssetImage (src) {
      return require('~/assets/images' + src)
    }
  }
})
