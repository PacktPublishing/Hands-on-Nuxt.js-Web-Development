'use strict'

const getters = {
  doubleCount (state) {
    return state.count * 2
  },
  sumWithRootCount (state, getters, rootState) {
    return state.count + rootState.count
  }
}

export default getters
