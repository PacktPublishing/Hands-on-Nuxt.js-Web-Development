'use strict'

// All middlewares are used here.
// Check other Koa official middlewares: https://github.com/koajs
import serve from 'koa-static'
import favicon from 'koa-favicon'
import bodyParser from 'koa-bodyparser'
import config from './config'
import routes from './routes'

export default (app) => {
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(async (ctx, next) => {
    try {
      await next()

      // Handle 404 - throw it as an error.
      if (ctx.status === 404) {
        ctx.throw(404)
      }

      // Use this when you want to format the 200 res further.
      // e.g. {"status":200,"data":{"message":"Hello home sample!"}}
      // else, you get, e.g. {"message":"Hello home sample!"}
      if (ctx.status === 200) {
        ctx.body = {
          status: 200,
          data: ctx.body
        }
      }
    } catch (err) {
      ctx.status = err.status || 500

      ctx.type = 'json'
      ctx.body = {
        status: ctx.status,
        message: err.message
      }

      ctx.app.emit('error', err, ctx)
    }
  })

  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
  app.use(serve(config.static_dir.root))

  // Add favicon.
  app.use(favicon('static/favicon.ico'))

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use(bodyParser())

  // Add routes.
  app.use(routes.routes(), routes.allowedMethods())
}
