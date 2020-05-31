'use strict'

const actions = {
  async login({ commit }, { name, age }) {
    // You can through error here, e.g:
    if (!name || !age) {
      throw new Error('Bad credentials')
    }

    const data = {
      name: name,
      age: age
    }

    // Store the persistent data on the client side.
    // https://vuejs.org/v2/cookbook/client-side-storage.html
    const parsed = JSON.stringify(data);
    localStorage.setItem('user', parsed)

    commit('setUser', data)
  },

  async logout({ commit }) {
    // Remove the persistent data.
    localStorage.removeItem('user')
    commit('setUser', null)
  }
}

export default actions
