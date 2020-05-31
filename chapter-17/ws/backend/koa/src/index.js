'use strict'

import Koa from 'koa'
import WebSocket from 'ws'
import http from 'http'
import config from './config'
import middlewares from './middlewares'
import rdbChangeFeeds from 'core/database/rethinkdb/changefeeds'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || config.server.port

// Middlewares are imported here.
middlewares(app)

// Hook socket.io up.
const server = http.createServer(app.callback())
const wss = new WebSocket.Server({ server })

// Integrate ws and rethinkdb.
// It should be done only once globally.
wss.on('connection', function connection(ws) {
  // ws.on('message', function incoming(message) {
  //   console.log('received: %s', message);
  // });
  rdbChangeFeeds(ws)
})

server.listen(port, host)
