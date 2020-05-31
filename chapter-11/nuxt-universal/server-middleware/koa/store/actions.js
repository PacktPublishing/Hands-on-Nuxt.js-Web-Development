'use strict'

import axios from 'axios'

export default {
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })

      // // Parse the object as string
      // const parsed = JSON.stringify(data)

      // // Save data to sessionStorage
      // sessionStorage.setItem('session', parsed)

      commit('setUser', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/api/logout')

    // // Remove saved data from sessionStorage
    // sessionStorage.removeItem('session')

    commit('setUser', null)
  }
}

