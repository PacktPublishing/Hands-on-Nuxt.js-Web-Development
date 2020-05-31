const express = require('express')
const { Nuxt } = require('nuxt')
const app = express()

// Import and set Nuxt.js options
let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
const { host, port } = nuxt.options.server

// Give Nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
