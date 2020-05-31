const Koa = require('koa')
const { Nuxt } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('./nuxt.config.js')

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  await nuxt.ready()

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port)
}

start()
