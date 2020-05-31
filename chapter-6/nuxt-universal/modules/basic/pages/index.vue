<template>
  <div>
    <h1>Home page</h1>
    <p>Hello World!</p>
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    const basic = this.$basic()
    console.log(basic)
  }
}
</script>

<style>
/** empty */
</style>
