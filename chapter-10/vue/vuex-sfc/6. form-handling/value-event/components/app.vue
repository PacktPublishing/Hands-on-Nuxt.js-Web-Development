<template>
  <div>
    <input v-bind:value="message" v-on:input="updateMessage">
    {{ message }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    // message () {
    //   return this.$store.state.message
    // }

    ...mapState({
      message: state => state.message
    })
  },
  methods: {
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target.value)
    }
  }
}
</script>

<style>
/** empty */
</style>
