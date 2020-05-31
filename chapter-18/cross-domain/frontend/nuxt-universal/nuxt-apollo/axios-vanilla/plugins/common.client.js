'use strict'

// https://github.com/vuejs/vue/issues/2918
// https://github.com/vuejs/vue/issues/9200
import Vue from 'vue'
import $ from 'jquery'
import Foundation from 'foundation-sites'
import AOS from 'aos'

// Promisise setTimeout.
// function delay (ms) {
//   return new Promise(res => {
//     setTimeout(res, ms)
//   })
// }

export default ({ app: { router } }) => {
  // Called globally when everything is resolved.
  router.afterEach(async (to, from) => {

    // A hack to wait for Vue to render the route component in a half
    // second before calling the rest of global functions.
    await Vue.prototype.$delay(400)

    // Find the form element before applying ZF.
    // window.element = document.querySelector('.form-submit')
    // console.log('Finding form element:', window.element)
    $(document).foundation()

    // AOS scroll reveal.
    // http://michalsnik.github.io/aos/
    AOS.init({
      duration: 1200,
    })

    // A hack to wait for Vue to render the route component in a half
    // second before calling the rest of global functions.
    // setTimeout(() => {
    //   window.element = document.querySelector('.form-submit')
    //   console.log('Finding form element:', window.element)
    //   $(document).foundation()

    //   AOS.init({
    //     duration: 1200,
    //   })
    // }, 400)

    // Does not work:
    // window.element = document.querySelector('.form-submit')
    // console.log('Finding form element:', window.element)

    // Does not work:
    // Vue.nextTick(() => {
    //   window.element = document.querySelector('.form-submit')
    //   console.log('Finding form element:', window.element)
    // })
  })
}
