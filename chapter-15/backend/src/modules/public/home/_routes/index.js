'use strict'

import Router from 'koa-router'
// import cookie from 'cookie'

const router = new Router()

const middleware3 = async (ctx, next) => {
  console.log('Time started at: ', Date.now())
  await next()
}

const middleware1 = async (ctx, next) => {
  console.log('I am the first. ')
  await next()
  console.log('I am the last. ')
}

const middleware2 = async (ctx, next) => {
  console.log('I am the second. ')
  await next()
  console.log('I am the third. ')
}

// Display hello world.
router.get('/', middleware1, middleware2, middleware3, async (ctx, next) => {
  // ctx.session = null
  // console.log("session", ctx.session)
  // console.log(ctx.headers)
  // console.log(ctx.headers.cookie)
  // console.log((ctx.headers.cookie && ctx.headers.cookie.indexOf('koa:sess') > -1))

  // if (ctx.headers.cookie && ctx.headers.cookie.indexOf('koa:sess') > -1) {
  //   ctx.cookie = cookie.parse(ctx.headers.cookie)['koa:sess']
  //   console.log(ctx.cookie)
  //   ctx.authUser = JSON.parse(Buffer.from(ctx.cookie, 'base64')).authUser
  //   console.log(ctx.authUser)
  // }

  ctx.type = 'json'
  ctx.body = {
    message: 'Hello World!'
  }
})

export default router
