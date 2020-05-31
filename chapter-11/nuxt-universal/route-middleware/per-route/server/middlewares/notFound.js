'use strict'

// https://github.com/koajs/koa/wiki/Error-Handling
export default async (ctx, next) => {
  await next()
  // Handle 404 - throw it as an error.
  if (ctx.status === 404) {
    ctx.throw(404, 'hekko world')
  }
}
