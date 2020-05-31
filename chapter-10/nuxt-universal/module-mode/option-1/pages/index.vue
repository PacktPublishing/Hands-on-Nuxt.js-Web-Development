<template>
  <div>
    <p>Root:</p>
    <p>{{ numberRoot }}, {{ getNumberRoot }}</p>
    <button v-on:click="doNumberRoot">x 2 (root)</button>

    <p>Module 1:</p>
    <p>{{ numberModule1 }}, {{ getNumberModule1 }}</p>
    <button v-on:click="doNumberModule1">x 2 (module1)</button>

    <p>Module 2:</p>
    <p>{{ numberModule2 }}, {{ getNumberModule2 }}</p>
    <button v-on:click="doNumberModule2">x 2 (module2)</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      numberRoot: state => state.number,
    }),
    ...mapState('module1', {
      numberModule1: state => state.number,
    }),
    ...mapState('module2', {
      numberModule2: state => state.number,
    }),

    ...mapGetters({
      getNumberRoot: 'getter1'
    }),
    ...mapGetters('module1', {
      getNumberModule1: 'getter1'
    }),
    ...mapGetters('module2', {
      getNumberModule2: 'getter1'
    })
  },
  methods: {
    ...mapActions({
      doNumberRoot:'action1'
    }),
    ...mapActions('module1', {
      doNumberModule1:'action1'
    }),
    ...mapActions('module2', {
      doNumberModule2:'action1'
    })
  }
}
</script>

<style>
/** empty */
</style>
