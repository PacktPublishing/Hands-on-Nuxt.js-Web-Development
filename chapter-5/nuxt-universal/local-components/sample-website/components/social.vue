<template>
  <li><a :href="item.link" target="_blank"><i :class="item.classes"></i></a></li>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
/** empty */
</style>
