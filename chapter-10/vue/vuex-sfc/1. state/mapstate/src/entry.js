'use strict'

import Vue from 'vue'
import App from './app.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    experience: 1,
    name: 'John',
    age: 20,
    job: 'designer',
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: {
    App
  }
})
