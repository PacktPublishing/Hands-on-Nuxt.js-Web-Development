<template>
  <div>
    <h1>Home page</h1>
    <p>{{ $greet('Jane') }}</p>
    <p>{{ $message }}</p>
    <p>{{ messages }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let helloWorld = []
    helloWorld.push(this.$message) // こんにちは世界！

    // Push another language.
    this.$message = 'Olá Mundo!'
    helloWorld.push(this.$message) // Olá Mundo!

    return {
      messages: helloWorld
    }
  }
}
</script>

<style>
/** empty */
</style>
