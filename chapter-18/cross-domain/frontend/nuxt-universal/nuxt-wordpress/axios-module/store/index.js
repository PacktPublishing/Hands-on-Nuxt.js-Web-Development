'use strict'

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit }, { $axios }) {
    let { data } = await $axios.get('/api/menu')
    commit('setMenu', data)
  }
}
