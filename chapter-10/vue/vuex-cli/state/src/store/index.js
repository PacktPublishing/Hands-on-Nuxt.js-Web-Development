'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 1
  },
  mutations: {
    multiply: state => state.number = state.number * 2,
    divide: state => state.number = state.number / 2
  }
})
