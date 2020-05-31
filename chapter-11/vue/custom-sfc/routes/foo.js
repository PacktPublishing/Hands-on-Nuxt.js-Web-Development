'use strict'

import Foo from '../components/foo.vue'
import userInfo from '../middlewares/userInfo'
import multiguard from '../plugins/multiguard'

export default {
  name: 'foo',
  path: '/foo',
  component: Foo,
  beforeEnter: multiguard(userInfo)
}
