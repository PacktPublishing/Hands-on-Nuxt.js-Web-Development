'use strict'

import Router from 'koa-router'

const router = new Router()

// Dummy users.
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

// Get all users.
router.get('/', async (ctx, next) => {
  // var userId = ctx.state
  // console.log(userId)

  ctx.type = 'json'
  ctx.body = users
})

export default router
