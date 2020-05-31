'use strict'

import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import config from '../../../../config'

const router = new Router()

// Dummy users.
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

// Add POST - /api/public/users/login
// You can login with:
// curl -X POST -H "Content-Type: application/json" --data '{"username":"thedude", "password":"abides"}' http://localhost:9000/public/users/login
// curl -X POST -d "username=demo&password=demo" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/public/users/login
router.post('/login', async (ctx, next) => {
  // Get the parsed data.
  let request = ctx.request.body || {}

  if (request.username === 'demo' && request.password === 'demo') {
    let payload = { id: 1, name: 'Alexandre', username: 'demo' }
    ctx.session.authUser = payload

    // 1 minute => 60
    // 5 minutes => 60 * 5
    ctx.body = {
      id: 1,
      name: 'Alexandre',
      username: 'demo',
      jwt: jwt.sign(payload, config.JWT_SECRET, { expiresIn: 1 * 60 }) // Signing a token with 1 min of expiration.
    }
  } else {
    ctx.throw(401)
  }
})

export default router
