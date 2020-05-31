'use strict'

const mutations = {
  increment (state) {
    // `state` is the local module state
    state.count++
  },
  incrementWithRootCount (state, n) {
    state.count += n
  }
}

export default mutations
