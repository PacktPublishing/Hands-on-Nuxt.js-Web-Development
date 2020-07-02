'use strict'

import Router from 'koa-router'
import rdb from 'rethinkdb'

const router = new Router()

// Get all users.
router.get('/', async (ctx, next) => {
  try {
    // Throw the error if the table does not exist.
    let exists = await rdb.tableList().contains('user').run(ctx._rdbConn)
    if (exists === false) {
      ctx.throw(500, '"user" table does not exist')
    }

    // Retrieve documents.
    // https://www.rethinkdb.com/docs/guide/javascript/
    // https://rethinkdb.com/api/javascript/order_by/
    let cursor = await rdb.table('user')
      .orderBy(rdb.desc('createdAt')) // latest first
      .run(ctx._rdbConn)

    let users = await cursor.toArray()

    ctx.type = 'json'
    ctx.body = users

    await next()

  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err)
  }
})

export default router
