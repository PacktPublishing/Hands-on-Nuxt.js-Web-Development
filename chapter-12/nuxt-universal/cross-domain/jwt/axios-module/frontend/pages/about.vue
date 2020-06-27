<template>
  <div>
    <h1>About page</h1>
    <p>Something awesome!</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    console.log('context.$axios.defaults.baseURL =', context.$axios.defaults.baseURL)
    let result = await context.$axios.$get('/')
  }
}
</script>
