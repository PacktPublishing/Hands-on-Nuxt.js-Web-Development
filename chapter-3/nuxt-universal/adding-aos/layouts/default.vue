<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/example-2">example-2</nuxt-link></li>
    </ul>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted () {
    // Detect ZF sceen size on resize.
    this.$getCurrentScreenSize()
  }
}
</script>

<style>
/*empty*/
</style>
