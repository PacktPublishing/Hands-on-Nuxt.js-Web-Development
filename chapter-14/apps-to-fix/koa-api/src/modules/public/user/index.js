'use strict'

import Router from 'koa-router'
import fetchUsers from './_routes'
import fetchUser from './_routes/fetch-user'

// Better with prefix
// https://www.npmjs.com/package/koa-router#router-prefixes
const router = new Router({
  prefix: '/users'
})

const routes = [fetchUsers, fetchUser]
for (var route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router
