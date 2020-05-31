'use strict'

export default {
  increment (state) {
    state.counter++
  },
  setUser (state, data) {
    state.authUser = data
  },
  addVisit (state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  },
  setToken (state, data) {
    if (data) {
      state.jwt = data.jwt
      return
    }
    state.jwt = null
  },
  setGreeting (state, data) {
    if (data) {
      state.greeting = data.message
      return
    }
    state.greeting = null
  }
}
