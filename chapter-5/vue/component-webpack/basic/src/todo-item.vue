<template>
  <li>
    <input type="checkbox" :name="item.id" v-model="checked"> {{ item.text }}
    <span v-html="`&pound;`"></span>{{ item.price }}
  </li>
</template>

<script>
export default {
  props: ['item'],
  data: function () {
    return {
      checked: false
    }
  },
  methods: {
    addToCart (item) {
      this.$emit('add-item', item)
    }
  },
  watch: {
    checked: function (boolean) {
      if (boolean === false) {
        return this.$emit('delete-item', this.item)
      }
      this.$emit('add-item', this.item)
    }
  }
}
</script>

<style>
/** empty */
</style>
