'use strict'

import Router from 'koa-router'
import rdb from'rethinkdb'

const router = new Router()

// Update a user.
router.put('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {}

  if (body.id === undefined) {
    ctx.throw(400, 'id is undefined')
  }
  if (body.name === undefined) {
    ctx.throw(400, 'name is undefined')
  }
  if (body.slug === undefined) {
    ctx.throw(400, 'slug is undefined')
  }
  if (body.id === '') {
    ctx.throw(400, 'id is required')
  }
  if (body.name === '') {
    ctx.throw(400, 'name is required')
  }
  if (body.slug === '') {
    ctx.throw(400, 'slug is required')
  }

  try {
    // Throw the error if the table does not exist.
    let exists = await rdb.tableList().contains('users').run(ctx._rdbConn)
    if (exists === false) {
      ctx.throw(500, 'users table does not exist')
    }

    // Find one doc except itself.
    // https://rethinkdb.com/api/javascript/filter
    // https://rethinkdb.com/api/javascript/ne
    let found = await rdb.table('users')
      .filter(
        rdb.row('slug').eq(body.slug) // equal
      )
      .filter(
        rdb.row('id').ne(body.id) // but not equal itself
      )
      .nth(0) // query for a stream/array element by its position
      .default(null) // will return null if no user found.
      .run(ctx._rdbConn)

    if (found) {
      ctx.throw(404, 'slug has been taken')
    }

    let objectId = body.id
    let timestamp = Date.now()
    let updateQuery = {
      name: body.name,
      slug: body.slug,
      updatedAt: timestamp
    }

    // Update document by id.
    // https://rethinkdb.com/api/javascript/update/
    let result = await rdb.table('users')
      .get(objectId)
      .update(updateQuery, {returnChanges: true})
      .run(ctx._rdbConn)

    if (result.replaced !== 1) {
      ctx.throw(404, 'update user failed')
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
