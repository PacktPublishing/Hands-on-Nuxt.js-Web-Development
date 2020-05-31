<template>
  <div>
    <h1>Home page</h1>
    <p>Hello World!</p>
    <p>{{ ip }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const ip = await context.$axios.$get('http://icanhazip.com')
    return {
      ip
    }
  }
}
</script>

<style>
/** empty */
</style>
