<template>
  <div>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/secret">/secret</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: `App`,
}
</script>

<style>
/** empty */
</style>

