<template>
  <div>
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
