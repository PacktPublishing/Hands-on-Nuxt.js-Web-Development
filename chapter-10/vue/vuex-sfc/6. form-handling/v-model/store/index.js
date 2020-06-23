'use strict'

import Vue from 'vue/dist/vue.js'

import Vuex from 'vuex'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: true,
  state: {
    user: {
      message: ''
    }
  }
})
