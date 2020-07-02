'use strict'

import Router from 'koa-router'
import pool from 'core/database/mysql'

const router = new Router()

// Get all users.
router.get('/', async (ctx, next) => {
  try {
    var users = await pool.query(
      'SELECT `id`, `name`, `created_on` FROM `users`'
    )
  } catch (err) {
    // Throw the error.
    ctx.throw(500, err.sqlMessage)
  }

  ctx.type = 'json'
  ctx.body = users
})

export default router
