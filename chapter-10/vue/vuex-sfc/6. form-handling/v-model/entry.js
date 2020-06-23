'use strict'

import Vue from 'vue/dist/vue.js'
import App from './components/app.vue'
import store from './store'

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: {
    App
  }
})
