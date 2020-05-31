'use strict'

import Login from '../components/login.vue'
import userInfo from '../middlewares/userInfo'
import multiguard from '../plugins/multiguard'

export default {
  name: 'login',
  path: '/login',
  component: Login,
  beforeEnter: multiguard(userInfo)
}
