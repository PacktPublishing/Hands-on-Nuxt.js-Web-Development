<template>
  <li>{{ todo.text }} <button v-on:click="remove($event)">Completed</button></li>
</template>

<script>
import $ from 'jquery'

export default {
  props: ['todo'],
  methods: {
    remove ($event) {
      this.$emit('completed', this.todo)
      $($event.target).parent().addClass('removed')
    }
  }
}
</script>

<style>
.removed {
  text-decoration: line-through;
}
.removed button {
  display: none;
}
</style>
