'use strict'

import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: true,
  state: {
    user: {
      firstname: '',
      lastname: '',
      message: ''
    }
  },
  mutations: {
    updateMessage (state, message) {
      state.user.message = message
    },

    updateUser (state, user)  {
      // Use Object.assign() to merge two objects into a new object:
      // Object.assign(state.user, user)

      // Use spread syntax to merge two objects.
      state.user = { ...state.user, ...user }
    }
  },
  strict: debug
})
