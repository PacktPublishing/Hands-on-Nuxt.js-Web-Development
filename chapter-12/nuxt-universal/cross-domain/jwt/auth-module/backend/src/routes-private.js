'use strict'

import Router from 'koa-router'

// Import routes from different modules.
import home from './modules/private/home'
import user from './modules/private/user'
import authenticate from './middlewares/authenticate'

const router = new Router({ prefix: '/private' })

const modules = [home, user]
for (var module of modules) {
  router.use(authenticate, module.routes(), module.allowedMethods())
}

export default router
