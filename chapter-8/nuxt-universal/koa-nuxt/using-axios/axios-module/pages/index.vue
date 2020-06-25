<template>
  <div class="container">
    <div>
      <h1 class="title">
        nuxt-koa
      </h1>
      <h2 class="subtitle">
        My impeccable Nuxt.js project
      </h2>
      <p>{{ host }}</p>
      <nuxt-link to="/users">Users</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ req, res }) {
    if (process.server) {
     return { host: req.headers.host }
    }
    return { host: '' }
  }
}
</script>

<style>
/** empty */
</style>
