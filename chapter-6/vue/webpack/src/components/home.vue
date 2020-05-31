<template>
  <div>
    <h1>Home</h1>
    <p>{{ $greet('John') }}</p>
    <p>{{ $message }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    let helloWorld = []
    helloWorld.push(this.$message) // こんにちは世界！

    // Push another language.
    this.$message = 'Ciao mondo!'
    helloWorld.push(this.$message) // Ciao mondo!

    return {
      message: helloWorld
    }
  }
}
</script>

<style>
/** empty */
</style>
