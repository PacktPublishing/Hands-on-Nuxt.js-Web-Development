'use strict'

// Import node_modules middlewares.
// Check other Koa official middlewares: https://github.com/koajs
import serve from 'koa-static'
import favicon from 'koa-favicon'
import bodyParser from 'koa-bodyparser'

import routes from './routes'

// Import custom local middlewares.
import sample from 'Middlewares/sample'
import errorHandler from 'Middlewares/errorHandler'
import notFound from 'Middlewares/notFound'
import okOutput from 'Middlewares/okOutput'
import rdbOpenConnection from 'Middlewares/database/rdb/connection/open'
import rdbCloseConnection from 'Middlewares/database/rdb/connection/close'

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

  // Middleware that will create a connection to the database.
  app.use(rdbOpenConnection)

  // Add routes.
  app.use(routes.routes(), routes.allowedMethods())

  // Middleware to close a connection to the database.
  app.use(rdbCloseConnection)
}
