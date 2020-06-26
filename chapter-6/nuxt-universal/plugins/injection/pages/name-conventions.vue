<template>
  <div>
    <h1>Name Conventions</h1>
    <p>{{ divide }}</p>
    <p>{{ subtract }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  // client-server hook.
  data () {
    if (process.server) {
      console.log('data ()')
    }

    // client-only => get an error on server-side only fresh: 'this.$divide is not a function'
    // this.$divide(8, 2)
    let divide = ''
    if (process.client) {
      divide = this.$divide(8, 2)
    }
    return {
      divide,
      message: 'welcome'
    }
  },
  // client-server hook.
  asyncData (context) {
    // server-only => get an error on client-side only: 'this.$subtract is not a function'
    // context.app.$subtract(10, 4)
    let subtract = ''
    if (process.server) {
      subtract = context.app.$subtract(10, 4)
    }
    return {
      subtract,
    }
  },
  // client-server hook.
  beforeCreate () {
    if (process.server) {
      console.log(this.$subtract(10, 4))
    }
  },
  // client-server hook.
  created () {
    if (process.server) {
      console.log('created ()')
    }
  },
  // client-only hook.
  beforeMount () {
    console.log('beforeMount (): ', this.$divide(8, 2))
  },
  // client-only hook.
  mounted () {
    this.message = 'hello world'
    console.log('mounted (): ', this.$divide(8, 2))
  },
  // client-only hook.
  beforeUpdate () {
    console.log('beforeUpdate (): ', this.$divide(8, 2))
  },
  // client-only hook.
  updated () {
    console.log('updated (): ', this.$divide(8, 2))
  },
  beforeDestroy () {
    console.log('beforeDestroy (): ', this.$divide(8, 2))
  },
  destroyed () {
    console.log('destroyed (): ', this.$divide(8, 2))
  }
}
</script>

<style>
/** empty */
</style>
