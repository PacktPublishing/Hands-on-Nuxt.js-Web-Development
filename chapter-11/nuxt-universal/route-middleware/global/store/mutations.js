'use strict'

export default {
  addVisit (state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  }
}
