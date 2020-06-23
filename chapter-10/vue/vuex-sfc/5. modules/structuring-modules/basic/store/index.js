'use strict'

import Vue from 'vue'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import module1 from './modules/module1'
import module2 from './modules/module2'

import Vuex from 'vuex'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    number: 3
  },
  actions,
  getters,
  mutations,
  modules: {
    a: module1,
    b: module2
  }
})

