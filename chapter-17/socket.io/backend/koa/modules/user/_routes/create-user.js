'use strict'

import Router from 'koa-router'
import rdb from 'rethinkdb'
import { sanitise } from 'Core/utils'
import schema from '../schema'

const router = new Router()

// Add a user.
router.post('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {}

  if (body.name === undefined) {
    ctx.throw(400, 'name is undefined')
  }
  if (body.slug === undefined) {
    ctx.throw(400, 'slug is undefined')
  }
  if (body.name === '') {
    ctx.throw(400, 'name is required')
  }
  if (body.slug === '') {
    ctx.throw(400, 'slug is required')
  }

  try {
    // Throw the error if the table does not exist.
    let exists = await rdb.tableList().contains('user').run(ctx._rdbConn)
    if (exists === false) {
      ctx.throw(500, '"user" table does not exist')
    }

    // Check if the provided slug is taken.
    let searchQuery = {
      slug: body.slug
    }
    let found = await rdb.table('user')
      .filter(searchQuery)
      .nth(0) // query for a stream/array element by its position
      .default(null) // will return null if no user found.
      .run(ctx._rdbConn)

    if (found) {
      ctx.throw(404, 'slug has been taken')
    }

    // Current timestamp.
    let timestamp = Date.now()
    let options = {
      name: body.name,
      slug: body.slug,
      createdAt: timestamp,
      // example fields that won't be injected into the document:
      username: 'marymoe',
      password: '123123'
    }

    // Enforce the schema.
    let document = sanitise(options, schema)

    // Insert a doc.
    // https://rethinkdb.com/api/javascript/insert
    let result = await rdb.table('user')
      .insert(document, {returnChanges: true})
      .run(ctx._rdbConn)

    if (result.inserted !== 1) {
      ctx.throw(404, 'insert user failed')
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
