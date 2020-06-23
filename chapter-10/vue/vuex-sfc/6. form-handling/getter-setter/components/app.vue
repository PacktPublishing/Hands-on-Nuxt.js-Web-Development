<template>
  <div>
    <p>
      <input v-model="message" />
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    message: {
      get () {
        return this.$store.state.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  }
}
</script>

<style>
/** empty */
</style>
