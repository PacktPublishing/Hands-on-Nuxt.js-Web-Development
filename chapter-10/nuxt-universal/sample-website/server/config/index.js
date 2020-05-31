'use strict'

const database = {
  host: 'localhost',
  port: 27017,
  dbname: process.env.NODE_ENV === 'test' ? 'nuxt-apptest' : 'nuxt-app'
}

export default {
  database: {
    host: database.host,
    port: database.port,
    dbname: database.dbname,
    url: 'mongodb://' + database.host + ':' + database.port + '/' + database.dbname
  },
  server: {
    port: 3000
  },
  static_dir: {
    root: '../static'
  }
}
