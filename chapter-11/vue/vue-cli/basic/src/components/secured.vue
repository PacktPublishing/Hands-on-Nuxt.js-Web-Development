<template>
  <div>
    <h1>Secured page</h1>
    <h2>Hello {{ $store.state.user.name }}!</h2>
    <p>You are {{ $store.state.user.age }}</p>
    <p>I am the <b>super</b> secured content, I am shown only when the user is connected.</p>
    <p>You can also refresh this page, you'll still be connected!</p>
    <router-link to="/">Back to the login page to log out</router-link>
  </div>
</template>

<script>
export default {
  name: 'secured'
}
</script>

<style>
/** empty */
</style>
