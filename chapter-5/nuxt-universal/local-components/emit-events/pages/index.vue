<template>
  <div>
    <h1>
      Home page
    </h1>
    <p>Example of emitting data from component to the parent component.</p>
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <InputText v-model="newTodoText"></InputText>
      <button>Add</button>
    </form>
    <ol>
      <TodoItem
        v-for="item in todos"
        v-bind:todo="item"
        v-bind:key="item.id"
        v-on:completed="handleCompleted"
      ></TodoItem>
    </ol>
  </div>
</template>

<script>
// Skip importing if components:true is set in nuxt.config.js
// import TodoItem from '~/components/todo-item.vue'
// import InputText from '~/components/input-text.vue'

export default {
  data () {
    return {
      newTodoText: '',
      todos: [
        { id: 0, text: 'Feed the cat' },
        { id: 1, text: 'Mop the floor' },
        { id: 2, text: 'Make a sandwich' }
      ],
      nextTodoId: 3
    }
  },
  // components: {
  //   TodoItem,
  //   InputText
  // },
  methods: {
    handleCompleted (todo) {
      alert(todo.text + ' - Task Done')
    },
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        text: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
