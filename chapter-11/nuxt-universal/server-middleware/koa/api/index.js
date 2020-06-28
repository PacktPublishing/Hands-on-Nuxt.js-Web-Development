import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session'
import Router from 'koa-router'
import cookie from 'cookie'

const app = new Koa()
const router = new Router()

// Add session.
// https://github.com/koajs/session
app.keys = ['some secret hurr']

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 60000, // expires in 1 min.
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}

app.use(session(CONFIG, app))
// or if you prefer all default config, just use => app.use(session(app))

// The parsed body will store in ctx.request.body
// If nothing was parsed, body will be an empty object {}
// https://github.com/koajs/bodyparser
// https://github.com/koajs/koa/issues/719
app.use(bodyParser())

router.get('/', async (ctx, next) => {

  // Console logs for checking.
  console.log('session =', ctx.session)
  console.log('ctx.headers =', ctx.headers)
  console.log('ctx.headers.cookie =', ctx.headers.cookie)
  console.log('koa:sess =', ctx.headers.cookie && ctx.headers.cookie.indexOf('koa:sess') > -1)

  let cookieParsed = null
  let auth = null
  if (ctx.headers.cookie && ctx.headers.cookie.indexOf('koa:sess') > -1) {
    cookieParsed = cookie.parse(ctx.headers.cookie)['koa:sess']
    console.log('cookieParsed =', cookieParsed)
  }
  if (cookieParsed) {
    auth = JSON.parse(Buffer.from(cookieParsed, 'base64')).auth
    console.log('auth =', auth)
  }

  ctx.type = 'json'
  ctx.body = {
    message: 'Hello World!'
  }
})

// Add POST - /api/login
router.post('/login', async (ctx, next) => {
  // Get the parsed data.
  let request = ctx.request.body || {}
  if (request.username === 'demo' && request.password === 'demo') {
    ctx.session.auth = { username: 'demo' }
    ctx.body = {
      username: 'demo'
    }
  } else {
    ctx.throw(401, 'Bad credentials')
  }
})

// Add POST - /api/logout
router.post('/logout', async (ctx, next) => {
  ctx.session = null
  ctx.body = { ok: true }
})

// Get login session GET - /api/session
router.get('/session', async (ctx, next) => {
  if (ctx.session && ctx.session.auth) {
    ctx.body = ctx.session.auth
  } else {
    ctx.throw(403, 'No session')
  }
})

app.use(router.routes())
app.use(router.allowedMethods())

// Export the server middleware
export default {
  path: '/api',
  handler: app.listen()
}
