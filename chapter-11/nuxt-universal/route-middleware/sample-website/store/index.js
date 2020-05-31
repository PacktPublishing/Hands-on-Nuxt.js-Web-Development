'use strict'

import axios from 'axios'

export const actions = {
   // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.ctx.session && req.ctx.session.authUser) {
      commit('setUser', req.ctx.session.authUser)
    }
  },

  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/public/users/login', { username, password })
      // If ok, axios.data should receive the following data format:
      // {"status":200,"data":{"username":"demo"}}
      // hence we should use data.data to get the authUser data.
      commit('setUser', data.data)
      commit('setToken', data.data)
      localStorage.setItem('jwt', data.data.jwt)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/api/public/users/logout')
    commit('setUser', null)
    commit('setToken', null)
  },

  async setToken ({ commit }, jwt) {
    commit('setToken',  {jwt: jwt})
  }
}
