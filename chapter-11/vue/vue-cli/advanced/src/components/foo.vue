<template>
  <div>foo</div>
</template>

<script>
export default {
  name: 'foo',
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line
    console.log('beforeRouteEnter, to.name = ', to.name, ', from.name = ', from.name)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // eslint-disable-next-line
    console.log('beforeRouteUpdate, to.name = ', to.name, ', from.name = ', from.name)
    next()
  },
  beforeRouteLeave (to, from, next) {
    // eslint-disable-next-line
    console.log('beforeRouteLeave, to.name = ', to.name, ', from.name = ', from.name)
    next()
  }
}
</script>

<style>
/** empty */
</style>
