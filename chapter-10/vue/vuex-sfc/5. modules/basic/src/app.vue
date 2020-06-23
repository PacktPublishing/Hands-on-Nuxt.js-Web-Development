<template>
  <div>
    <p>{{ numberModule1 }}</p>
    <p>{{ numberModule2 }}</p>
    <p>{{ getNumberModule1 }}</p>
    <p>{{ getNumberModule2 }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      numberModule1 (state) {
        return this.$store.state.a.number
      }
    }),
    ...mapState({
      numberModule2 (state) {
        return this.$store.state.b.number
      }
    }),
    ...mapGetters({
      getNumberModule1: 'getNumberModule1',
      getNumberModule2: 'getNumberModule2'
    }),
    // Or:
    getNumberModule1 (state) {
      return this.$store.getters.getNumberModule1
    },
    getNumberModule2 (state) {
      return this.$store.getters.getNumberModule2
    }
  }
}
</script>

<style>
/** empty */
</style>
