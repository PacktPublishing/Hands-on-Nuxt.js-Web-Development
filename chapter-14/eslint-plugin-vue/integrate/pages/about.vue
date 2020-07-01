<template>
  <div>
    <h1>About page</h1>
    <p>Something awesome!</p>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    console.log('context.$axios.defaults.baseURL =', context.$axios.defaults.baseURL)
    const result = await context.$axios.$get('/')
  }
}
</script>
