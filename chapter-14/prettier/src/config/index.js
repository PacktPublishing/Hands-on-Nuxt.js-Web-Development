'use strict'

const database = {
  host: 'localhost',
  port: 27017,
  dbname: process.env.NODE_ENV === 'test' ? 'nuxt-apptest' : 'nuxt-app',
}

export default {
  database: {
    host: database.host,
    port: database.port,
    dbname: database.dbname,
    url:
      'mongodb://' +
      database.host +
      ':' +
      database.port +
      '/' +
      database.dbname,
  },
  server: {
    port: 4000,
  },
  static_dir: {
    root: '../static',
  },
  // This secret will be read by JWT library while creating and validating
  // tokens. In production, we need to store this secret in environment variable
  // instead of a file.
  // https://github.com/clintmod/koa-jwt-login-example/blob/master/src/app.js
  JWT_SECRET: process.env.JWT_SECRET || 'jwt_secret',
}
