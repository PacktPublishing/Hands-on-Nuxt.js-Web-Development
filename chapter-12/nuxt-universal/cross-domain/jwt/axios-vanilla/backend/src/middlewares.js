'use strict'

// Import node_modules middlewares.
// Check other Koa official middlewares: https://github.com/koajs
import serve from 'koa-static'
import favicon from 'koa-favicon'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

// Import custom local middlewares.
import routesPublic from './routes-public'
import routesPrivate from './routes-private'
import sample from './middlewares/sample'
import errorHandler from './middlewares/errorHandler'
import notFound from './middlewares/notFound'
import okOutput from './middlewares/okOutput'

export default (app) => {
  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
  app.use(serve('assets'))

  // Add favicon.
  app.use(favicon('static/favicon.ico'))

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use(bodyParser())

  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(errorHandler)
  app.use(notFound)
  app.use(okOutput)

  // A sample middleware in a separate file.
  app.use(sample)

  // CORS.
  // https://github.com/koajs/cors
  app.use(cors({
    origin: 'http://localhost:3000', // https://lautiamkok.github.io
    credentials: true,
    allowHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization']
  }))

  // Add routes.
  app.use(routesPublic.routes(), routesPublic.allowedMethods())
  app.use(routesPrivate.routes(), routesPrivate.allowedMethods())
}
