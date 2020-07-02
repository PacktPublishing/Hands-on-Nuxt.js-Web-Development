'use strict'

// https://github.com/koajs/koa/wiki/Error-Handling
export default async (ctx, next) => {
  await next()
  // Use this when you want to format the 200 res further.
  // e.g. {"status":200,"data":{"message":"Hello home sample!"}}
  // else, you get, e.g. {"message":"Hello home sample!"}
  if (ctx.status === 200) {
    ctx.body = {
      status: 200,
      data: ctx.body
    }
  }
}
