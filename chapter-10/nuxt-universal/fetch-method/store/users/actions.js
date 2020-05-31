'use strict'

import axios from 'axios'

export default {
  setUsers ({ commit }, data) {
    commit('setUsers', data)
  },
  removeUser ({ commit }, id) {
    commit('removeUser', id)
  },
  async getUsers ({ commit }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    commit('setUsers', data)
  }
}
