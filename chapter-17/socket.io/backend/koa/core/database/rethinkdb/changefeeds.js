'use strict'

import rdb from 'rethinkdb'
import rdbConnection from './connection'

export default async (io, tableName, eventName) => {
  try {
    // Get the db connection.
    const connection = await rdbConnection()

    // Subscribe to user table's changefeed.
    var cursor = await rdb.table(tableName)
      .changes()
      .run(connection)

    cursor.each(function (err, row) {
      if (err) {
        throw err
      }
      console.log(JSON.stringify(row, null, 2))
      io.emit(eventName, row)
    })

  } catch( err ) {
    console.error(err)
  }
}
