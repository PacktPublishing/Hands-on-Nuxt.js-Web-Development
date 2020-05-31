<template>
  <div>
    <p>
      v-model (error): <br/>
      <input v-model="user.message" />
      {{ user.message }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style>
/** empty */
</style>
