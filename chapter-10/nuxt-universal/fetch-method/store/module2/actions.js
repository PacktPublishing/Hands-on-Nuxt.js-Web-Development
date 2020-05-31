'use strict'

export default {
  action1 ({ state, commit, rootState }) {
    // console.log('actions = ', rootState.number)
    commit('mutation1')
  }
}
