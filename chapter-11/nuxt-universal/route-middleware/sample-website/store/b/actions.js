'use strict'

const actions = {
  increment ({ state, getters, commit, rootState }) {
    commit('increment')
  },
  incrementIfOddOnRootSum ({ state, commit, rootState }) {
    if ((state.count + rootState.count) % 2 === 1) {
      commit('increment')
    }
  },
  incrementWithRootCount ({ state, commit, rootState }) {
    commit('incrementWithRootCount', rootState.count)
  }
}

export default actions
