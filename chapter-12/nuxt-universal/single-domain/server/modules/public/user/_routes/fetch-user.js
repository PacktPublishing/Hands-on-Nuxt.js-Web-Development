'use strict'

import Router from 'koa-router'

const router = new Router()

// Dummy users.
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

// Get the user by id.
router.get('/:id', async (ctx, next) => {
  const id = parseInt(ctx.params.id) // or ctx.request.params.id
  console.log(users[id])
  if (id >= 0 && id < users.length) {
    ctx.body = users[id]
  } else {
    ctx.throw(404)
  }
})

export default router
