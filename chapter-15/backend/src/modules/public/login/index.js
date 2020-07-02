'use strict'

import Router from 'koa-router'
import local from './_routes/local'

// Better with prefix
// https://www.npmjs.com/package/koa-router#router-prefixes
const router = new Router({
  prefix: '/login'
})

const routes = [local]
for (var route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router
