<template>
  <div>
    <h1>About page</h1>
    <p>Something awesome!</p>
    <p><b>userAgent:</b> {{ userAgent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ userAgent }) {
    return {
      userAgent
    }
  }
}
</script>

<style>
/** empty */
</style>
