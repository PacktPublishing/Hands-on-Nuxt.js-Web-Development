'use strict'

import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import config from '../../../../config'

const router = new Router()

// Add POST - /api/public/users/login
// You can login with:
// curl -X POST -H "Content-Type: application/json" --data '{"username":"thedude", "password":"abides"}' http://localhost:9000/public/users/login
// curl -X POST -d "username=demo&password=demo" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/public/users/login
router.post('/login', async (ctx, next) => {
  // Get the parsed data.
  let request = ctx.request.body || {}

  if (request.username === 'demo' && request.password === 'demo') {
    // Define payload.
    let payload = { id: 1, name: 'Alexandre', username: 'demo' }
    // Signing a token with 1 min of expiration.
    // 1 minute => 60
    // 5 minutes => 60 * 5
    let token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: 1 * 60 })
    ctx.session.user = payload
    ctx.session.token = token

    ctx.body = {
      user: payload,
      message: 'logged in ok',
      token: token
    }
  } else {
    ctx.throw(401)
  }
})

export default router
