<template>
  <div>
    <p>{{ this.$root.$data.message }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello world from component'
    }
  },
  mounted () {
    // Get the data from the root instance.
    console.log(this.$root.$data.message)
  }
}
</script>

<style>
/** empty */
</style>
