'use strict'

import axios from 'axios'

export default {
  async getUsers ({ commit }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    commit('setUsers', data)
  }
}
