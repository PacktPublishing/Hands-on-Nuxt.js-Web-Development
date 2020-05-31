import bodyParser from 'body-parser'
import session from 'express-session'

export default {
  head: {
    title: 'Auth Routes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Auth Routes example' }
    ]
  },
  /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    // Difference between express-session and cookie-session:
    // https://stackoverflow.com/a/23566934/413225
    session({
      name: 'express_sid',
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      // Cookie Options
      cookie: {
        maxAge: 60000, // 1 min or 24 * 60 * 60 * 1000 // 24 hours
      }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ]
}
