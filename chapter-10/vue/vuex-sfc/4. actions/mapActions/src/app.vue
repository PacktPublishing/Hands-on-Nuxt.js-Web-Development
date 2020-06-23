<template>
  <div>
    <p>{{ number }}</p>
    <p>
      <button v-on:click="multiply">x 2</button>
      <button v-on:click="square">x 2 (square)</button>
      <button v-on:click="multiplyAsync">x 2 (multiplyAsync)</button>
      <button v-on:click="divide">/ 2</button>
      <button v-on:click="multiplyBy(10)">x 10</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    number () {
      return this.$store.state.number
    }
  },
  methods: {
    ...mapActions([
      'multiply', // map `this.multiply()` to `this.$store.dispatch('multiply')`

      'multiplyAsync', // map `this.multiplyAsync()` to `this.$store.dispatch('multiplyAsync')`

      // `mapActions` also supports payloads:
      'multiplyBy', // map `this.multiplyBy(amount)` to `this.$store.dispatch('multiplyBy', amount)`

      'divide', // map `this.divide()` to `this.$store.dispatch('divide')`
    ]),
    ...mapActions({
      square: 'multiply' // map `this.square()` to `this.$store.dispatch('multiply')`
    })
  }
}
</script>

<style>
/** empty */
</style>
