'use strict'

import Router from 'koa-router'
import fetchUsers from './_routes'
import fetchUser from './_routes/fetch-user'
import createUser from './_routes/create-user'
import updateUser from './_routes/update-user'
import deleteUser from './_routes/delete-user'

// Better with prefix
// https://www.npmjs.com/package/koa-router#router-prefixes
const router = new Router({
  prefix: '/users'
})

const routes = [
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser
]
for (var route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router
