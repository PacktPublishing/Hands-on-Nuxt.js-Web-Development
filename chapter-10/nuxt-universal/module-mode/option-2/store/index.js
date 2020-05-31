'use strict'

export const state = () => ({
  number: 3
})

export const mutations = {
  mutation1 (state) {
    state.number = state.number * 2
  }
}

export const getters = {
  getter1 (state, getters) {
    return state.number
  }
}

export const actions = {
  action1 ({ state, commit }) {
    commit('mutation1')
  }
}
