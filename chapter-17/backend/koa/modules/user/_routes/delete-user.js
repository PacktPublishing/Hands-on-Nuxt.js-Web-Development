'use strict'

import Router from 'koa-router'
import rdb from 'rethinkdb'

const router = new Router()

// Delete a user.
router.del('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {}

  if (body.id === undefined) {
    ctx.throw(400, 'id is undefined')
  }
  if (body.id === '') {
    ctx.throw(400, 'id is required')
  }

  try {
    // Throw the error if the table does not exist.
    let exists = await rdb.tableList().contains('user').run(ctx._rdbConn)
    if (exists === false) {
      ctx.throw(500, '"user" table does not exist')
    }

    let objectId = body.id

    // Find one doc.
    const found = await rdb.table('user')
      .get(objectId)
      .run(ctx._rdbConn)
    if (!found) {
      ctx.throw(404, 'user does not exist')
    }

    // Delete a single document by id.
    // https://rethinkdb.com/api/javascript/delete/
    let result = await rdb.table('user')
      .get(objectId)
      .delete()
      .run(ctx._rdbConn)

    // // Delete all documents.
    // result = await rdb.table('users').delete().run(ctx._rdbConn)

    if (result.deleted !== 1) {
      ctx.throw(404, 'delete user failed')
    }

    ctx.type = 'json'
    ctx.body = result

    await next()

  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err)
  }
})

export default router
