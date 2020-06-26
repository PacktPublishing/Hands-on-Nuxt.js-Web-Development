<template>
  <div>
    <h1>Home page</h1>
    <p>Hello World!</p>

    <div>
      <b-button @click="toggle">
        {{ show ? 'Hide' : 'Show' }} Alert
      </b-button>
      <b-alert
        v-model="show"
        dismissible
        @dismissed="dismissed"
      >
        Hello {{ name }}!
      </b-alert>
    </div>
  </div>
</template>

<script>
// https://bootstrap-vue.js.org/docs
// import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  data () {
    return {
      name: 'BootstrapVue',
      show: true
    }
  },
  watch: {
    show (newVal) {
      console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
    }
  },
  methods: {
    toggle () {
      console.log('Toggle button clicked')
      this.show = !this.show
    },
    dismissed () {
      console.log('Dismiss button clicked')
    }
  }
}
</script>

<style>
/** empty */
</style>
