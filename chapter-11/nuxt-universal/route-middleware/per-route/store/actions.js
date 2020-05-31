'use strict'

import axios from 'axios'

export default {
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/public/users/login', { username, password })
      // If ok, axios.data should receive the following data format:
      // {"status":200,"data":{"username":"demo"}}
      // hence we should use data.data to get the authUser data.
      commit('setAuth', data.data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/api/public/users/logout')
    commit('setAuth', null)
  }
}

