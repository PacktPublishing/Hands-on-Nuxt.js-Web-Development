'use strict'

export default {
  namespaced: true,
  state: {
    number: 1
  },
  getters: {
    getter1 (state, getters, rootState) {
      return state.number
    }
  },
  mutations: {
    mutation1 (state) {
      state.number = state.number * 2
    }
  },
  actions: {
    action1 ({ state, commit, rootState }) {
      commit('mutation1')
    }
  }
}
