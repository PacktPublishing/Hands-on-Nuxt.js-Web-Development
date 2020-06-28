'use strict'

// Vue Router Multiguard package.
// https://www.npmjs.com/package/vue-router-multiguard
import multiguard from 'vue-router-multiguard'
import secret from '../components/secret.vue'
import isLoggedIn from '../middlewares/isLoggedIn'
import isAdult from '../middlewares/isAdult'

export default {
  name: 'secret',
  path: '/secret',
  component: secret,
  // beforeEnter: multiguard(isLoggedIn, isAdult)
  beforeEnter: multiguard([isLoggedIn, isAdult])
  // beforeEnter: isLoggedIn
}
