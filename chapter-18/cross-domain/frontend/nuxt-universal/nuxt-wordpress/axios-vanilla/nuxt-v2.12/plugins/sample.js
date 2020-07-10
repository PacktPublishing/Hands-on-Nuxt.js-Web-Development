'use strict'

// Function or plugin to be registered before Vue.js init and executed
// later.

// 1. Register a plugin to the Vue instance:
import Vue from 'vue'
import something from 'something'
Vue.use(something)

// 2. Register a function to the Vue instance:
import Vue from 'vue'
Vue.prototype.$doSomething = () => { ... }

// 3. Register a function to the Nuxt context:
export default ({ app }, inject) => {
  app.doSomething = () => { ... }
}

// 4. Register a function to both:
export default ({ app }, inject) => {
  inject('doSomething', () => { ... })
}

// 5. Register global mixins.
import Vue from 'vue'
Vue.mixin({
  methods: {
    doSomething () {}
  }
})
