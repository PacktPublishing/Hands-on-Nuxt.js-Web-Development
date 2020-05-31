<template>
  <input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="changed"
    name="subscribe"
    value="newsletter"
  >
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  methods: {
    changed ($event) {
      this.$emit('change', $event.target.checked)
    }
  }
}
</script>

<style>
/** empty */
</style>
