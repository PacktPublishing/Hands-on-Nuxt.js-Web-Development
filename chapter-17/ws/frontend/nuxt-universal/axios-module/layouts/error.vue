<template>
  <div>
    <h1>Custom Error Page</h1>
    <h2>{{ error.statusCode }} Error</h2>
    <p>{{ error.message }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'layout-error'
}
</script>

<style>
/** empty */
</style>
