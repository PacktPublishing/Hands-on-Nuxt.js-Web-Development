'use strict'

// Vue Router Multiguard package.
// https://www.npmjs.com/package/vue-router-multiguard
import multiguard from 'vue-router-multiguard'
import secured from '../components/secured.vue'
import isLoggedIn from '../middlewares/isLoggedIn'
import isAdult from '../middlewares/isAdult'

export default {
  name: 'secured',
  path: '/secured',
  component: secured,
  // beforeEnter: multiguard(isLoggedIn, isAdult)
  beforeEnter: multiguard([isLoggedIn, isAdult])
  // beforeEnter: isLoggedIn
}
