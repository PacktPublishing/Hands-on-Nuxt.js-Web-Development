<template>
  <div>
    <p>{{ countA }}, {{ doubleCountA }}, {{ sumWithRootCountA }}</p>
    <p>{{ countB }}, {{ doubleCountB }}, {{ sumWithRootCountB }}</p>
    <button class="button" v-on:click="incrementA">+ (incrementA)</button>
    <button class="button" v-on:click="incrementIfOddOnRootSumA">+ (incrementIfOddOnRootSumA)</button>
    <button class="button" v-on:click="incrementB">+ (incrementB)</button>
    <button class="button" v-on:click="incrementIfOddOnRootSumB">+ (incrementIfOddOnRootSumB)</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('a', {
      countA: state => state.count,
    }),
    ...mapState('b', {
      countB: state => state.count
    }),
    ...mapGetters('a', {
      doubleCountA: 'doubleCount',
      sumWithRootCountA: 'sumWithRootCount'
    }),
    ...mapGetters('b', {
      doubleCountB: 'doubleCount',
      sumWithRootCountB: 'sumWithRootCount'
    })
  },
  methods: {
    ...mapActions('a', {
      incrementA:'increment',
      incrementIfOddOnRootSumA:'incrementIfOddOnRootSum',
      incrementWithRootCountA:'incrementWithRootCount',
    }),
    ...mapActions('b',  {
      incrementB:'increment',
      incrementIfOddOnRootSumB: 'incrementIfOddOnRootSum',
      incrementWithRootCountB:'incrementWithRootCount',
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
