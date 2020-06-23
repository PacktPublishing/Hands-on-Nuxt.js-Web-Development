<template>
  <div>
    <p>{{ number }}</p>
    <p>
      <button v-on:click="multiply">x 2</button>
      <button v-on:click="multiplyAsync">x 2 (multiplyAsync)</button>
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
      this.$store.dispatch('multiply')
    },
    multiplyAsync () {
      this.$store.dispatch('multiplyAsync')
    },
    multiplyBy (number) {
      this.$store.dispatch('multiply', number)
    },
    divide () {
      this.$store.dispatch('divide')
    }
  }
}
</script>

<style>
/** empty */
</style>
