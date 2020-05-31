<template>
  <div>
    <h1>Vue Injections</h1>
    <p>square => context.app.$square(5) => {{ square }}</p>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    return {
      square: context.app.$square(5)
    }
  }
}
</script>

<style>
/** empty */
</style>
