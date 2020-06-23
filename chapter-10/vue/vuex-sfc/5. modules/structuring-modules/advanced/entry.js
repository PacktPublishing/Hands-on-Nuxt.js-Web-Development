'use strict'

import Vue from 'vue'
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
