'use strict'

const database = {
  host: 'localhost',
  port: 28015,
  dbname: process.env.NODE_ENV === 'test' ? 'nuxtdbtest' : 'nuxtdb'
}

export default {
  host: database.host,
  port: database.port,
  dbname: database.dbname
}
