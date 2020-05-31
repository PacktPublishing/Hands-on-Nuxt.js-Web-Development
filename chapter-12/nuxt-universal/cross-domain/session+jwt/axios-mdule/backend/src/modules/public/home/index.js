'use strict'

import Router from 'koa-router'
import index from './_routes'

// Better with prefix
// https://www.npmjs.com/package/koa-router#router-prefixes
const router = new Router()

const routes = [index]

for (var route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router
