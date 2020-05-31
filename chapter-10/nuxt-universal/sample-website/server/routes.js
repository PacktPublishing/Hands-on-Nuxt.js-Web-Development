'use strict'

// import Router from 'koa-trie-router'
// import mount from 'koa-mount'

// // Import routes from different modules.
// import home from 'default/home'
// import user from 'default/user'

// const router = new Router()

// export default () => {
//   // Add Routes.
//   router.use(mount('/', home()))
//   router.use(mount('/users', user()))
//   return router.middleware()
// }

import Router from 'koa-trie-router'
const router = new Router()

const middleware3 = async (ctx, next) => {
  console.log('Time started at: ', Date.now())
  await next()
}

const middleware1 = async(ctx, next) => {
  console.log("I am the first. ")
  await next()
  console.log("I am the last. ")
}

const middleware2 = async(ctx, next) => {
  console.log("I am the second. ")
  await next()
  console.log("I am the third. ")
}

// Dummy users.
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

export default (app) => {
  // Home page.
  router.get('/', middleware1, middleware2, middleware3, async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
      message: 'Hello World!'
    }
  })

  // Get all users.
  router.get('/users', async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = users
  })

  // Get the user by id.
  router.get('/users/:id', async (ctx, next) => {
    const id = parseInt(ctx.params.id) // or ctx.request.params.id
    console.log(users[id])
    if (id >= 0 && id < users.length) {
      ctx.body = users[id]
    } else {
      ctx.throw(404)
    }
  })

  router.post('/user', async (ctx, next) => {
    // Get the parsed data.
    let request = ctx.request.body || {}
    // Print the parsed data.
    console.log(request)
    // Print the raw data.
    console.log(ctx.request.rawBody)
    ctx.body = request
  })

  // Add POST - /api/login
  router.post('/login', async (ctx, next) => {
    // Get the parsed data.
    let request = ctx.request.body || {}

    if (request.username === 'demo' && request.password === 'demo') {
      ctx.session.authUser = { username: 'demo' }
      ctx.body = { username: 'demo' }
    } else {
      ctx.throw(401)
    }
  })

  // Add POST - /api/logout
  router.post('/logout', async (ctx, next) => {
    delete ctx.session.authUser
    ctx.body = { ok: true }
  })

  return router.middleware()
}
