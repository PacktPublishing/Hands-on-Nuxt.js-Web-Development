<template>
  <div class="container">
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/global">global</nuxt-link></li>
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
.container {
  width: 100%;
  height: 100vh;
}
</style>
