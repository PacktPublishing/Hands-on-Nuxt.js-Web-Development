<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ job }}</p>
  </div>
</template>

<script>
// in full builds helpers are exposed as Vuex.mapState
import { mapState } from 'vuex'

export default {
  computed: mapState([
    // map this.name to store.state.name, etc
    'name',
    'age',
    'job',
  ])
}
</script>

<style>
/** empty */
</style>
