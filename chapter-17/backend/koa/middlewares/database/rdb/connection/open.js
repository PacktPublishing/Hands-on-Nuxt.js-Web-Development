'use strict'

import config from 'Configs/rethinkdb'
import rdb from'rethinkdb'

/**
 * Create a RethinkDB connection, and save it in ctx._rdbConn
 * @param  {[type]}   ctx
 * @param  {Function} next
 */
export default async (ctx, next) => {
  ctx._rdbConn = await rdb.connect({
    host: config.host,
    port: config.port,
    db: config.dbname
  })
  await next()
}
