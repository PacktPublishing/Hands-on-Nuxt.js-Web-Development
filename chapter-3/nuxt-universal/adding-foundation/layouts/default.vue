<template>
  <div>
    <ul class="menu align-center">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/form">Form</nuxt-link></li>
      <li><nuxt-link to="/motion-ui">Motion UI</nuxt-link></li>
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
