<template>
  <p>{{ host }}</p>
</template>

<script>
export default {
  asyncData ({ req, res }) {
    if (process.server) {
     return { host: req.headers.host }
    }
    return { host: '' }
  }
}
</script>
