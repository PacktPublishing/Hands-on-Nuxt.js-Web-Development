'use strict'

import Router from 'koa-router'
const router = new Router({ prefix: '/api' })

// Home page.
router.get('/', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Hello World!'
  }
})

router.post('/login', async (ctx, next) => {
  // Get the parsed data.
  let request = ctx.request.body || {}

  if (request.username === 'demo' && request.password === 'demo') {
    ctx.session.authUser = { username: 'demo' }
    ctx.body = { username: 'demo' }
  } else {
    ctx.throw(401)
  }
})

router.post('/logout', async (ctx, next) => {
  delete ctx.session.authUser
  ctx.body = { ok: true }
})

export default router
