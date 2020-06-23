<template>
  <div>
    <p>{{ countCitrus }}</p>
    <p>{{ totalCitrus }}</p>
    <p>{{ getOrange }}</p>
  </div>
</template>

<script>
// in full builds helpers are exposed as Vuex.mapGetters
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      // map this.countCitrus to store.state.countCitrus, etc
      'countCitrus'
    ]),
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.countCitrus`
      totalCitrus: 'countCitrus'
    }),
    getOrange () {
      return this.$store.getters.getFruitByName('orange')
    }
    // ...mapGetters({
    //   totalExperience (getters) {
    //     return getters.sumExperience(2)
    //   }
    // })
  }
}
</script>

<style>
/** empty */
</style>
