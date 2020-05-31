'use strict'

// Import node_modules middlewares.
// Check other Koa official middlewares: https://github.com/koajs
import serve from 'koa-static'
import favicon from 'koa-favicon'
import bodyParser from 'koa-bodyparser'
// import session from 'koa-session'
import cors from '@koa/cors'

// Import custom local middlewares.
import config from './config'
import routesPublic from './routes-public'
import routesPrivate from './routes-private'
import sample from './middlewares/sample'
import errorHandler from './middlewares/errorHandler'
import notFound from './middlewares/notFound'
import okOutput from './middlewares/okOutput'

export default (app) => {
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(errorHandler)
  app.use(notFound)
  app.use(okOutput)

  // Note: this option only feasible if the api is on a separate/ standalone port.
  // Use koa-jwt to protect entire api or certain group of routes instead of
  // using custom middleware with jsonwebtoken
  // https://github.com/koajs/jwt

  // Custom 401 handling if you don't want to expose koa-jwt errors to users.
  // app.use(function(ctx, next){
  //   return next().catch((err) => {
  //     if (401 == err.status) {
  //       ctx.throw(401, err.message)
  //       // ctx.status = 401
  //       // ctx.body = 'Protected resource, use Authorization header to get access\n'
  //     } else {
  //       throw err
  //     }
  //   })
  // })

  // app.use(async function (ctx, next) {
  //   return next().catch((err) => {
  //     if (err.status === 401) {
  //       ctx.status = 401;
  //       let errMessage = err.originalError ?
  //         err.originalError.message :
  //         err.message
  //       ctx.body = {
  //         error: errMessage
  //       };
  //       ctx.set("X-Status-Reason", errMessage)
  //     } else {
  //       throw err;
  //     }
  //   });
  // });

  // Middleware below this line is only reached if JWT token is valid
  // unless the URL starts with '/public'
  // app.use(jwt({ secret: config.JWT_SECRET }).unless({ path: [/^\/api\/public/, '/', '/about'] }))

  // const CONFIG = {
  //   key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  //   /** (number || 'session') maxAge in ms (default is 1 days) */
  //   /** 'session' will result in a cookie that expires when session/browser is closed */
  //   /** Warning: If a session cookie is stolen, this cookie will never expire */
  //   maxAge: 120000, // expires in 2 min.
  //   autoCommit: true, /** (boolean) automatically commit headers (default true) */
  //   overwrite: true, /** (boolean) can overwrite or not (default true) */
  //   httpOnly: true, /** (boolean) httpOnly or not (default true) */
  //   signed: true, /** (boolean) signed or not (default true) */
  //   rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  //   renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  // }

  // // Add session.
  // // https://github.com/koajs/session
  // app.keys = ['some secret hurr']
  // app.use(session(CONFIG, app))
  // // or if you prefer all default config, just use => app.use(session(app))

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

  // A sample middleware in a separate file.
  app.use(sample)

  // app.use(checkToken)
  // Place the middleware here of you want to protect the entire api.
  // app.use(async (ctx, next) => {
  //   try {
  //     await next()

  //     // Try to decode & verify the JWT token
  //     // The token contains user's id ( it can contain more informations )
  //     // and this is saved in req.user object
  //     if(ctx.req.hasOwnProperty('headers') && ctx.req.headers.hasOwnProperty('authorization')) {
  //       ctx.req.user = jwt.verify(ctx.req.headers['authorization'], config.JWT_SECRET, function (err, payload) {
  //         console.log(payload)
  //         console.log(err)
  //       })
  //     } else {
  //       // If there is no autorization header, return 401 status code.
  //       ctx.throw(401, 'token is required.')
  //     }
  //   } catch (err) {
  //     ctx.status = err.status || 500

  //     ctx.type = 'json'
  //     ctx.body = {
  //       status: ctx.status,
  //       message: err.message
  //     }

  //     ctx.app.emit('error', err, ctx)
  //   }
  // })

  // CORS.
  // https://github.com/koajs/cors
  app.use(cors({
    // According to the documentation at Mozilla 34, you can have only one Access-Control-Allow-Origin header,
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Access-Control-Allow-Origin
    origin: 'http://localhost:3000', // https://lautiamkok.github.io
    credentials: true,
    allowHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization']
  }))

  // Add routes.
  app.use(routesPublic.routes(), routesPublic.allowedMethods())
  app.use(routesPrivate.routes(), routesPrivate.allowedMethods())
}
