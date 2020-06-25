'use strict'

import mongodb from 'mongodb'
import config from './config/mongodb'

const MongoClient = mongodb.MongoClient

export default class Mongo {
  constructor () {
    this.connection = null
    // https://docs.mongodb.com/manual/reference/method/ObjectId/index.html#ObjectId
    // https://stackoverflow.com/questions/28895067/using-uuids-instead-of-objectids-in-mongodb
    this.objectId = mongodb.ObjectId
  }

  async connect () {
    // Use connect method to connect to the Server.
    // https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars
    this.connection = await MongoClient.connect(config.url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    return this.connection.db(config.dbname)
  }

  close () {
    this.connection.close()
  }
}

// const mongo = async () => {
//   // Use connect method to connect to the Server
//   const client = await MongoClient.connect(config.url)
//   const db = client.db(config.dbname)
//   return db
// }

// export default mongo
