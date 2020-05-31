'use strict'

import Router from 'koa-router'

// Import routes from different modules.
import home from './modules/private/home'
import authenticate from './middlewares/authenticate'

const router = new Router({ prefix: '/api/private' })

const modules = [home]
for (var module of modules) {
  router.use(authenticate, module.routes(), module.allowedMethods())
}

export default router
