'use strict'

export default {
  addTodo(state, text) {
    state.list.push({
      id: state.nextTodoId++,
      text: text
    })
  },
  removeTodo(state, id) {
    let found = state.list.find(todo => todo.id === id)
    state.list.splice(state.list.indexOf(found), 1)
  }
}
