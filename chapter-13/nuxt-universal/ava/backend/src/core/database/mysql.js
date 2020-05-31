import util from 'util'
import mysql from 'mysql'

// Rather than creating and managing connections one-by-one, this module also
// provides built-in connection pooling using mysql.createPool(config). A pool
// is a place where connections get stored. When you request a connection from a
// pool, you are either given a connection that is currently not being used or a
// new connection. If you’re at the connection limit, it will wait until a
// connection is available before it continues.
// https://www.npmjs.com/package/mysql#pooling-connections
// https://en.wikipedia.org/wiki/Connection_pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'tklau',
  database: 'nuxt-auth'
})

// Ping database to check for common exception errors.
// ref: https://medium.com/@mhagemann/create-a-mysql-database-middleware-with-node-js-8-and-async-await-6984a09d49f4
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }

  // Release the connection to the pool if no error.
  if (connection) {
    connection.release()
  }
})

// Refactoring MySQL to Node.js 8’s Async/Await/ Promisify for Node.js async/await.
// MySQL npm package does not support async/await, Node.js has a solution for
// such case. Its included promisify utility is coming to the rescue.

// pool.query() is a shortcut for pool.getConnection() + connection.query() + connection.release().
pool.query = util.promisify(pool.query)

export default pool
