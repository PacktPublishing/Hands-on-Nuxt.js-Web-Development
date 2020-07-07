'use strict'

import Secured from '../components/secured.vue'
import isLoggedIn from '../middlewares/isLoggedIn'
import isAdult from '../middlewares/isAdult'
// import multiguard from '../plugins/multiguard'
// Vue Router Multiguard package.
// https://www.npmjs.com/package/vue-router-multiguard
import multiguard from 'vue-router-multiguard'

export default {
  name: 'secured',
  path: '/secured',
  component: Secured,
  // beforeEnter: multiguard(isLoggedIn, isAdult)
  beforeEnter: multiguard([isLoggedIn, isAdult])
  // beforeEnter: isLoggedIn
}
