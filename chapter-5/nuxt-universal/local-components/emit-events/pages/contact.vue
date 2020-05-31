<template>
  <div>
    <h1>
      Contact page
    </h1>
    <p>Example of emitting data from custom checkbox component to the parent component.</p>
    <form v-on:submit.prevent="subscribeNewsletter">
      <label for="newsletter">Subscribe to newsletter</label>
      <InputCheckbox v-model="checkedSubscribe"></InputCheckbox>
      <button>Add</button>
    </form>
    {{ checkedSubscribe }}
  </div>
</template>

<script>
import $ from 'jquery'
import InputCheckbox from '~/components/input-checkbox.vue'

export default {
  data () {
    return {
      checkedSubscribe: true
    }
  },
  components: {
    InputCheckbox
  },
  methods: {
    subscribeNewsletter ($event) {
      var formData = JSON.stringify($($event.target).serializeArray())
      // Send the data [{"name":"subscribe","value":"newsletter"}] to the server
      // instead of [{"name":"subscribe","value":"on"}].
      console.log(formData)
    }
  },
  watch: {
    checkedSubscribe (boolean) {
      // Use the boolean for something else...
      console.log(boolean)
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
