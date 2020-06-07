'use strict'

import Vue from 'vue/dist/vue.js'
import App from './app.vue'

new Vue({
  el: '#todos',
  data: {
    message: 'hello world from root'
  },
  template: '<App/>',
  components: {
    App
  }
})
