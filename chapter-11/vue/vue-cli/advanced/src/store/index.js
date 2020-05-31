'use strict'

import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'

import Vuex from 'vuex'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

let user =  null
if (localStorage.getItem('user')) {
  try {
    user = JSON.parse(localStorage.getItem('user'))
  } catch(e) {
    // console.log(e.message)
    localStorage.removeItem('user');
  }
}

export default new Vuex.Store({
  state: {
    user: user
  },
  actions,
  mutations,
  strict: debug
})
