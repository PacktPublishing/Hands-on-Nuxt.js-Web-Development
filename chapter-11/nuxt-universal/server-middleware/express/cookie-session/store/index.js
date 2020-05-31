import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  setUser: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('setUser', req.session.authUser)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
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
    commit('setUser', null)
  }
}
