'use strict'

import Koa from 'koa'
import config from './config'
import middlewares from './middlewares'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || config.server.port

// Middlewares are imported here.
middlewares(app)

app.listen(port, host)
