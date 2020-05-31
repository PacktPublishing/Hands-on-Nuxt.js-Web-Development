<template>
  <input v-bind:value="value" placeholder="e.g. Feed the cat" v-on:input="addNewTask">
</template>

<script>
export default {
  props: ['value'],
  // model: {
  //   prop: 'value', // Vue's default
  //   event: 'input' // Vue's default
  // },
  methods: {
    addNewTask ($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style>
/** empty */
</style>
