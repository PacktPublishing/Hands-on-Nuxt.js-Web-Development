<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ countAlias }}</p>
    <p>{{ countPlusLocalState }}</p>
  </div>
</template>

<script>
// in full builds helpers are exposed as Vuex.mapState
import { mapState } from 'vuex'

export default {
  data () {
    return {
      localCount: 4
    }
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    count: state => state.count,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: 'count',

    // to access local state with `this`, a normal function must be used
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
</script>

<style>
/** empty */
</style>
