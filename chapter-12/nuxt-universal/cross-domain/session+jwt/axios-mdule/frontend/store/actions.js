'use strict'

export default {
  async login(context, { username, password }) {
    try {
      const { data } = await this.$axios.$post('/api/public/users/login', { username, password })
      context.commit('setUser', data)
      context.commit('setJWT', data.jwt)
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message)
      }
      throw error
    }
  },

  async logout({ commit }) {
    await this.$axios.$post('/api/public/users/logout')
    commit('setUser', null)
    commit('setJWT', null)
  }
}

