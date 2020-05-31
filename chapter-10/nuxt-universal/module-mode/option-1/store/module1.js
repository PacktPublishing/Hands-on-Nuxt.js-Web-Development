'use strict'

export const state = () => ({
  number: 1
})

export const mutations = {
  mutation1 (state) {
    state.number = state.number * 2
  }
}

export const getters = {
  getter1 (state, getters, rootState) {
    // console.log('getter = ', rootState.number)
    return state.number
  }
}

export const actions = {
  action1 ({ state, commit, rootState }) {
    // console.log('action = ', rootState.number)
    commit('mutation1')
  }
}
