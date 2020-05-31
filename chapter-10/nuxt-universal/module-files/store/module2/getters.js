'use strict'

export default {
  getter1 (state, getters, rootState) {
    // console.log('getters = ', rootState.number)
    return state.number
  }
}
