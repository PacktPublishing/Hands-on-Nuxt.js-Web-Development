<template>
  <div>
    <p>{{ numberModule1 }}</p>
    <p>{{ numberModule2 }}</p>
    <p>{{ getNumberModule1 }}</p>
    <p>{{ getNumberModule2 }}</p>
    <!-- <p>{{ countA }}, {{ doubleCountA }}, {{ sumWithRootCountA }}</p>
    <p>{{ countB }}</p>
    <button @click="incrementA">+ (incrementA)</button>
    <button @click="incrementIfOddOnRootSumA">+ (incrementIfOddOnRootSumA)</button>
    <button @click="incrementB">+ (incrementB)</button>
    <button @click="incrementIfOddOnRootSumB">+ (incrementIfOddOnRootSumB)</button> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('a', {
      numberModule1 (state) {
        return state.number
      }
    }),
    ...mapState('b', {
      numberModule2 (state) {
        return state.number
      }
    }),
    ...mapGetters('a', {
      getNumberModule1: 'getNumber',
    }),
    ...mapGetters('b', {
      getNumberModule2: 'getNumber',
    })
  },
  // computed: {
  //   ...mapState('a', {
  //     countA: state => state.count,
  //   }),
  //   ...mapState('b', {
  //     countB: state => state.count
  //   }),
  //   ...mapGetters('a', {
  //     getNumberModule1: 'getNumber'
  //   })
  // },
  methods: {
    // ...mapActions('a', {
    //   incrementA:'increment',
    //   incrementIfOddOnRootSumA:'incrementIfOddOnRootSum',
    //   incrementWithRootCountA:'incrementWithRootCount',
    // }),
    // ...mapActions('b',  {
    //   incrementB:'increment',
    //   incrementIfOddOnRootSumB: 'incrementIfOddOnRootSum',
    // })
  }
}
</script>

<style>
/** empty */
</style>
