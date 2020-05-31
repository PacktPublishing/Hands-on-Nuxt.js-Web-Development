'use strict'

import axios from 'axios'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.ctx.session && req.ctx.session.authUser) {
      commit('setUser', req.ctx.session.authUser)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
      commit('setUser', data.data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('setUser', null)
  }
}
