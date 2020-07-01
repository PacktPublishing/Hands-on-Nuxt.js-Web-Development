'use strict'

import Router from 'koa-router'

const router = new Router()

// Get Hello - /api/private
// After you login and get a token you can access
// this (and any other non public endpoint) with:
// curl -X GET -H "Authorization: Bearer INSERT_TOKEN_HERE" http://localhost:3000/api/private
router.get('/', async (ctx, next) => {
  // If you are using koa-jwt:
  // ctx.body = 'Hello ' + ctx.state.user.name
  // If you are using jsonwebtoken:
  ctx.body = {
    message: 'Hello ' + ctx.state.jwtPayload.name
  }
})

export default router
