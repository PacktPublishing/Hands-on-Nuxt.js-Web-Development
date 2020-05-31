'use strict'

export default {
  setUsers (state, data) {
    state.list = data
  },
  removeUser (state, id) {
    let found = state.list.find(todo => todo.id === id)
    state.list.splice(state.list.indexOf(found), 1)
  }
}
