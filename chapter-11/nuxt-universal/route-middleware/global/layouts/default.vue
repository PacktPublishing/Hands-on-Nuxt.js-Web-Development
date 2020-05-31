<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
    <Visits />
    <nuxt />
  </div>
</template>

<script>
import Visits from '~/components/visits.vue'
export default {
  components: {
    Visits
  }
}
</script>

<style>
/** empty */
</style>
