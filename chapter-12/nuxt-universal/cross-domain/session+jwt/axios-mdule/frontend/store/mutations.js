'use strict'

export default {
  setUser (state, data) {
    state.authUser = data
  },
  setJWT (state, jwt) {
    if (jwt) {
      state.jwt = jwt
      return
    }
    state.jwt = null
  }
}
