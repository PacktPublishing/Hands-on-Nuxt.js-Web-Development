'use strict'

import Router from 'koa-router'

const router = new Router()

// Add POST - /api/user/logout
router.post('/logout', async (ctx, next) => {
  delete ctx.session.authUser
  ctx.session = null
  ctx.body = { ok: true }
})

export default router
