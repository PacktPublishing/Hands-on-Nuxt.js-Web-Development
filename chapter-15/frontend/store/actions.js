'use strict'

import axios from '~/plugins/axios-api'

const cookies = process.client ? require('js-cookie') : undefined

export default {
  async login({ commit }, { username, password }) {
    const { data } = await axios.post('/public/login/local', { username, password })

    // If ok, axios.data should receive the following data format:
    // {"status":200,"data":{"username":"demo"}}
    // hence we should use data.data to get the auth data.

    // saving token in cookie for server rendering
    cookies.set('auth', data.data)

    // mutating to store for client rendering
    commit('setAuth', data.data)
  },

  async logout({ commit }) {
    // Delete the client side cookie: auth.
    cookies.remove('auth')

    // Remove data from the state.
    commit('setAuth', null)
  }
}
