'use strict'

import axios from 'axios'

export default {
  async login({ commit }, { username, password }) {
    console.log("axios.defaults.baseURL =", axios.defaults.baseURL)
    try {
      const { data } = await axios.post('/api/public/users/login', { username, password })
      // If ok, axios.data should receive the following data format:
      // {"status":200,"data":{"username":"demo"}}
      // hence we should use data.data to get the authUser data.
      commit('setUser', data.data)
      commit('setJWT', data.data.jwt)
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message)
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/api/public/users/logout')
    commit('setUser', null)
    commit('setJWT', null)
  },

  setToken ({ commit }, jwt) {
    commit('setToken',  jwt)
  }
}

