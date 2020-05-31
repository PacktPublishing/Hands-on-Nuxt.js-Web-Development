'use strict'

const database = {
  host: 'localhost',
  port: 27017,
  dbname: 'nuxt-app'
}

export default {
  host: database.host,
  port: database.port,
  dbname: database.dbname,
  url: 'mongodb://' + database.host + ':' + database.port
}
