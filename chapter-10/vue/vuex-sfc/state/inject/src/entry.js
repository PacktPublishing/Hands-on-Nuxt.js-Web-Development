'use strict'

import Vue from 'vue/dist/vue.js'
import App from './app.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    number: 0
  },
  mutations: {
    multiply (state) {
      state.number = state.number * 2
    },
    divide (state) {
      state.number = state.number / 2
    }
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
