'use strict'

import Vue from 'vue/dist/vue.js'

import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  strict: true,
  state: {
    message: ''
  },
  mutations: {
    updateMessage (state, message) {
      state.message = message
    }
  }
})
