'use strict'

import Vue from 'vue'
import App from './app.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    number: 1
  },
  mutations: {
    multiply (state) {
      state.number = state.number * 2
    },
    divide (state) {
      state.number = state.number / 2
    },
    multiplyBy (state, n) {
      state.number = state.number * n
    }
  },
  actions: {
    multiplyAsync (context) {
      setTimeout(() => {
        context.commit('multiply')
      }, 1000)
    },
    multiply (context) {
      context.commit('multiply')
    },
    multiplyBy (context, n) {
      context.commit('multiplyBy', n)
    },
    divide (context) {
      context.commit('divide')
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
