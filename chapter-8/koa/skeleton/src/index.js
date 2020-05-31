const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const favicon = require('koa-favicon')
const serve = require('koa-static')

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(favicon('public/favicon.ico'))
app.use(serve('.'))
app.use(serve('static/fixtures'))

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World'
})

router.post('/post', (ctx, next) => {
  ctx.body = ctx.request.body
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
