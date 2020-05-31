'use strict'

// Vue Router Multiguard package.
// https://www.npmjs.com/package/vue-router-multiguard
import multiguard from 'vue-router-multiguard'
import Bar from '../components/bar.vue'
import isLoggedIn from '../middlewares/isLoggedIn'
import isAdult from '../middlewares/isAdult'
// import multiguard from '../plugins/multiguard'

export default {
  name: 'bar',
  path: '/bar',
  component: Bar,
  // beforeEnter: multiguard(isLoggedIn, isAdult)
  beforeEnter: multiguard([isLoggedIn, isAdult])
  // beforeEnter: isLoggedIn
}
