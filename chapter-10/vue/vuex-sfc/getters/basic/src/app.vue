<template>
  <div>
    <p>{{ totalCitrus }}</p>
    <p>{{ getOrange }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    totalCitrus () {
      return this.$store.getters.countCitrus
    },
    getOrange () {
      return this.$store.getters.getFruitByName('orange')
    }
  }
}
</script>

<style>
/** empty */
</style>
