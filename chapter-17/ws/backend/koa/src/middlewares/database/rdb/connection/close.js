'use strict'

import config from 'config/rethinkdb'
import rdb from'rethinkdb'

/**
 * Close the RethinkDB connection.
 * @param  {[type]}   ctx
 * @param  {Function} next
 */
export default async (ctx, next) => {
  ctx._rdbConn.close()
  await next()
  // console.log('last middleware')
}
