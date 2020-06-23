<template>
  <div>
    <p>{{ this.$store.state }}</p>
    <p>{{ number }}</p>
    <p>
      <button v-on:click="multiply">x 2</button>
      <button v-on:click="divide">/ 2</button>
      <button v-on:click="multiplyBy(10)">x 10</button>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    number () {
      return this.$store.state.number
    }
  },
  methods: {
    multiply () {
      this.$store.commit('multiply')
    },
    multiplyBy (number) {
      this.$store.commit('multiply', number)
    },
    divide () {
      this.$store.commit('divide')
    }
  }
}
</script>

<style>
/** empty */
</style>
