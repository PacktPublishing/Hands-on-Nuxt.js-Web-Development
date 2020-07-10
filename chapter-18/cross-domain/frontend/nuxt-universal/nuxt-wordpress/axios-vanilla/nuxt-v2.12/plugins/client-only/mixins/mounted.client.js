'use strict'

import Vue from 'vue'
import $ from 'jquery'

Vue.mixin({
  async mounted () {
    // Check if it is a page.
    const isPage = this.$options.parent !== undefined && this.$options.parent.name === 'page'
    if (isPage !== true) {
      return
    }

    // Only add anything below once.

    // Find the form element before applying ZF.
    // window.element = document.querySelector('.form-submit')
    // console.log('Finding form element:', window.element)
    $(document).foundation()
  }
})
