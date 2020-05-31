<template>
  <div id="app">
    <p>{{ this.$store.state }}</p>
    <p>{{ number }}</p>
    <p>
      <button @click="multiply">x 2</button>
      <button @click="divide">/ 2</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  // data () {
  //   return {
  //     number: this.$store.state.number
  //   }
  // },
  computed: {
    number () {
      return this.$store.state.number
    }
  },
  methods: {
    multiply () {
      this.$store.commit('multiply')
    },
    divide () {
      this.$store.commit('divide')
    }
  }
}
</script>

<style>
</style>
