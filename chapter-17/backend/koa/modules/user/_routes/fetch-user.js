'use strict'

import Router from 'koa-router'
import rdb from 'rethinkdb'

const router = new Router()

// Get the user by slug.
router.get('/:slug', async (ctx, next) => {
  // const slug = parseInt(ctx.params.slug) // or ctx.request.params.slug
  const slug = ctx.params.slug
  try {
    // Throw the error if the table does not exist.
    let exists = await rdb.tableList().contains('user').run(ctx._rdbConn)
    if (exists === false) {
      ctx.throw(500, '"user" table does not exist')
    }

    let searchQuery = {
      slug: slug
    }

    // Retrieve documents by filter.
    // https://rethinkdb.com/api/javascript/filter/
    let user = await rdb.table('user')
      .filter(searchQuery)
      .nth(0) // query for a stream/array element by its position
      .default(null) // will return null if no user found.
      .run(ctx._rdbConn)

    if (!user) {
      ctx.throw(404, 'user not found')
    }

    ctx.type = 'json'
    ctx.body = user

    await next()

  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err)
  }
})

export default router
