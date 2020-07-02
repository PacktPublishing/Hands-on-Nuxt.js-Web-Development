'use strict'

import Koa from 'koa'
import socket from 'socket.io'
import http from 'http'
import config from 'Configs'
import middlewares from '../middlewares'
import rdbChangeFeeds from 'Core/database/rethinkdb/changefeeds'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || config.server.port

// Middlewares are imported here.
middlewares(app)

// Hook socket.io up.
const server = http.createServer(app.callback())
const io = socket(server)

io.sockets.on('connection', socket => {
  console.log('a user connected: ' + socket.id)

  // Broadcast to the client.
  io.emit('emit.onserver', 'Hi client, what you up to?')
  console.log('Message to client: ' + socket.id)

  // Listen on the client.
  socket.on('emit.onclient', message => {
    console.log('Message from client, '+ socket.id + ': ' + message);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected: ' + socket.id)
  })
})

// Integrate socket and rethinkdb.
// It should be done only once globally.
rdbChangeFeeds(io, 'user', 'user.changefeeds')

// app.listen(port, host)
server.listen(port, host)
