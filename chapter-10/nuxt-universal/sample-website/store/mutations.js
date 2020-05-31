'use strict'

export default {
  increment (state) {
    state.counter++
  },
  setUser (state, data) {
    state.authUser = data
  }
}
