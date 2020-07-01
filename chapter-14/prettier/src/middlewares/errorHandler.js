'use strict'

// https://github.com/koajs/koa/wiki/Error-Handling
export default async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500

    // Decorate the error output.
    ctx.type = 'json'
    ctx.body = {
      status: ctx.status,
      message: err.message,
    }

    ctx.app.emit('error', err, ctx)
  }
}
