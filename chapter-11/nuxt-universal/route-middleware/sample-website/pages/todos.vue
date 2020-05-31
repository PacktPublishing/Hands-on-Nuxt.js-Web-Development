<template>
  <div>
    <form v-on:submit.prevent="addTodo">
      <input type="text" placeholder="What must be done?" v-model="text"/>
      <button class="button">Add Todo</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="todo.id">{{ todo.text }}
        <button class="button" v-on:click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    // todos () {
    //   return this.$store.state.todos.list
    // },
    ...mapState('todos', {
      todos (state) {
        return state.list
      }
    })
  },
  methods: {
    addTodo () {
      this.$store.commit('todos/addTodo', this.text)
      this.text = ''
    },
    removeTodo (id) {
      this.$store.commit('todos/removeTodo', id)
    }

    // ...mapMutations('todos', [
    //   'addTodo',
    //   'removeTodo'
    // ])

    // ...mapMutations("todos", {
    //   addTodoMutation: 'addTodo',
    //   removeTodo: 'removeTodo'
    // }),

    // addTodo () {
    //   this.addTodoMutation(this.text)
    //   this.text = ''
    // }
  }
}
</script>

<style>
/**/
</style>
