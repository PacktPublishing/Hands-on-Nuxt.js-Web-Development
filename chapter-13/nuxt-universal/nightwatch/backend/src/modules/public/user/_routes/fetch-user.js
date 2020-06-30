'use strict'

import Router from 'koa-router'

const router = new Router()

// Get the user by id.
router.get('/:id', async (ctx, next) => {
  const id = parseInt(ctx.params.id) // or ctx.request.params.id
  // ...
})

export default router
