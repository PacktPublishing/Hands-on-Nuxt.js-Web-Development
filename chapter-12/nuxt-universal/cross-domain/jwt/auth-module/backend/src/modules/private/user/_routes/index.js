'use strict'

import Router from 'koa-router'
import pool from 'core/database/mysql'

const router = new Router()

// Get the auth user from the payload.
router.get('/', async (ctx, next) => {
  var email = ctx.state.jwtPayload.email
  try {
    var users = await pool.query('SELECT * FROM `users` WHERE email = ?', [email])
  } catch (err) {
    // Throw the error.
    ctx.throw(500, err.sqlMessage)
  }

  if (users.length === 0) {
    ctx.throw(404, 'no user found')
  }
  let user = users[0]

  ctx.type = 'json'
  ctx.body = user
})

export default router
