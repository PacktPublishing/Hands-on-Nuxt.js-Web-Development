<template>
  <li><nuxt-link :to="item.link" v-html="item.name"></nuxt-link></li>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
/** empty */
</style>
