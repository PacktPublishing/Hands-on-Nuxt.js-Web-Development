const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('Time started at: ', Date.now())
  await next()
})

app.use(async (ctx, next) => {
  console.log("I am the first")
  await next()
  console.log("I am the last")
})

app.use(async (ctx, next) => {
  console.log("I am the second")
  await next()
  console.log("I am the third")
})

app.use(async ctx => {
  console.log('Hello World')
  ctx.body = 'Hello World'
})

app.listen(3000)
