'use strict'

import Router from 'koa-router'

const router = new Router()

const middleware3 = async (ctx, next) => {
  console.log('Time started at: ', Date.now())
  await next()
}

const middleware1 = async(ctx, next) => {
  console.log('I am the first. ')
  await next()
  console.log('I am the last. ')
}

const middleware2 = async(ctx, next) => {
  console.log('I am the second. ')
  await next()
  console.log('I am the third. ')
}

// Display hello world.
router.get('/', middleware1, middleware2, middleware3, async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Hello World!'
  }
})

export default router
