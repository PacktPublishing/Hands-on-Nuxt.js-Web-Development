<template>
  <div>
    <h2 v-if="error.statusCode === 404">Page not found</h2>
    <h2 v-else>An error occurred</h2>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'layout-error'
}
</script>
