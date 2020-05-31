'use strict'

import Router from 'koa-router'
import authUser from './_routes'

// Better with prefix
// https://www.npmjs.com/package/koa-router#router-prefixes
const router = new Router({
  prefix: '/users'
})

const routes = [authUser]
for (var route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router
