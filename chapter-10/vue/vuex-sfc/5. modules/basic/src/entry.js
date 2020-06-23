'use strict'

import Vue from 'vue'
import App from './app.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const module1 = {
  state: { number: 1 },
  mutations: {
    //
  },
  getters: {
    getNumberModule1 (state) {
      return state.number
    }
  },
  actions: {
    //
  }
}

const module2 = {
  state: { number: 2 },
  mutations: {
    //
  },
  getters: {
    getNumberModule2 (state) {
      return state.number
    }
  },
  actions: {
    //
  }
}

const store = new Vuex.Store({
  state: {
    number: 3
  },
  modules: {
    a: module1,
    b: module2
  }
})

// console.log(store.state.a.count)
// console.log(store.dispatch.a)

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: {
    App
  }
})
