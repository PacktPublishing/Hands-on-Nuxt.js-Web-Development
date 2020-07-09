'use strict'

export default {
  server: {
    port: 4000
  },
  // This secret will be read by JWT library while creating and validating
  // tokens. In production, we need to store this secret in environment variable
  // instead of a file.
  // https://github.com/clintmod/koa-jwt-login-example/blob/master/src/app.js
  JWT_SECRET: process.env.JWT_SECRET || 'jwt_secret'
}
