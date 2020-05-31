'use strict'

import Router from 'koa-router'
import local from './_routes/local'
import googleUrl from './_routes/google/url'
import googleMe from './_routes/google/me'

// Better with prefix
// https://www.npmjs.com/package/koa-router#router-prefixes
const router = new Router({
  prefix: '/login'
})

const routes = [local, googleUrl, googleMe]
for (var route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router
