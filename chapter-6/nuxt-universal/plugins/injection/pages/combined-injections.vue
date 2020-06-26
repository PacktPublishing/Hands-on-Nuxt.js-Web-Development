<template>
  <div>
    <h1>Combined Injections</h1>
    <p>this.$multiply(4, 3) = {{ this.$multiply(4, 3) }}</p>
    <p>multiply => context.app.$multiply(2, 3) = {{ multiply }}</p>
    <p>Store default state: {{ $store.state }}</p>
    <button class="button" v-on:click="updateStore">Update Store</button>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    return {
      multiply: context.app.$multiply(2, 3)
    }
  },
  beforeCreate () {
    console.log(this.$multiply(3, 3))
  },
  mounted () {
    console.log(this.$multiply(5, 3))

  },
  methods: {
    updateStore () {
      this.$store.dispatch('setNumbers')
    }
  }
}
</script>
