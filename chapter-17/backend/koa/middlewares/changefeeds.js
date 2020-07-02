'use strict'

import rdb from'rethinkdb'

export default async (ctx, next) => {
  // Subscribe to user table's changefeed.
  var cursor = await rdb.table('users')
    .changes()
    .run(ctx._rdbConn)

  cursor.each(function (err, row) {
    if (err) {
      throw err
    }
    console.log(JSON.stringify(row, null, 2))
  })
}
