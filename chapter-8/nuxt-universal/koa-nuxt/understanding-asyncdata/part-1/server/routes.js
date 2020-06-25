'use strict'

import Router from 'koa-router'
const router = new Router({ prefix: '/api' })

const middleware3 = async (ctx, next) => {
  console.log('Time started at: ', Date.now())
  await next()
}

const middleware1 = async(ctx, next) => {
  console.log('I am the first')
  await next()
  console.log('I am the last')
}

const middleware2 = async(ctx, next) => {
  console.log('I am the second')
  await next()
  console.log('I am the third')
}

// Dummy users.
const users = [
  { id: 1, name: 'Alexandre' },
  { id: 2, name: 'Pooya' },
  { id: 3, name: 'Sébastien' }
]

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
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const found = users.find(function (user) {
    return user.id == id
  })
  if (found) {
    ctx.body = found
  } else {
    ctx.throw(404, 'user not found')
  }
})

export default router
