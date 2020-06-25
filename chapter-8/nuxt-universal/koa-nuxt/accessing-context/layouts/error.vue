<template>
  <div>
    <h1>Custom Error Page</h1>
    <h2>{{ error.status }} Error</h2>
    <p>{{ error.text }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'layout-error'
}
</script>
