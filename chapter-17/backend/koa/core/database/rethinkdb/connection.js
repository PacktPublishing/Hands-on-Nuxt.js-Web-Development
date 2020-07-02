'use strict'

import config from 'Configs/rethinkdb'
import rethink from'rethinkdb'

const c = async() => {
  // https://rethinkdb.com/api/javascript/connect/
  const connection = await rethink.connect({
    host: config.host,
    port: config.port,
    db: config.dbname
  })
  return connection
}

export default c
