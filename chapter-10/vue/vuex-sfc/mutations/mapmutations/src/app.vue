<template>
  <div>
    <p>{{ this.$store.state }}</p>
    <p>{{ number }}</p>
    <p>
      <button v-on:click="multiply">x 2</button>
      <button v-on:click="divide">/ 2</button>
      <button v-on:click="square">x 2 (square)</button>
      <button v-on:click="multiplyBy(10)">x 10</button>
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    number () {
      return this.$store.state.number
    }
  },
  methods: {
    ...mapMutations([
      'multiply', // map `this.multiply()` to `this.$store.commit('multiply')`

      // `mapMutations` also supports payloads:
      'multiplyBy', // map `this.multiplyBy(amount)` to `this.$store.commit('multiplyBy', amount)`

      'divide', // map `this.divide()` to `this.$store.commit('divide')`
    ]),
    ...mapMutations({
      square: 'multiply' // map `this.square()` to `this.$store.commit('multiply')`
    })

    // multiply () {
    //   this.$store.commit('multiply')
    // },
    // divide () {
    //   this.$store.commit('divide')
    // }
  }
}
</script>

<style>
/** empty */
</style>
