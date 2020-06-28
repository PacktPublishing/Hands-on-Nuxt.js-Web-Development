'use strict'

import axios from 'axios'

export default {
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
      commit('setAuth', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('setAuth', null)
  }
}
