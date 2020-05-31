'use strict'

import lodash from 'lodash'

function sanitise (options, schema) {
  let data = options || {}

  if (schema === undefined) {
    // ctx is not passed into this level so can't do:
    // ctx.throw(400, '_id is required.')
    // So use a native error and throw it.
    const err = new Error('Schema is required.')
    err.status = 400
    err.expose = true
    throw err
  }

  // Get the keys from the object.
  // https://lodash.com/docs/4.17.4#keys
  let keys = lodash.keys(schema)

  // Source objects are applied from left to right. Once a property is set,
  // additional values of the same property are ignored.
  // https://lodash.com/docs/4.17.4#defaults
  let defaults = lodash.defaults(data, schema)

  // Creates an object composed of the picked object properties.
  // https://lodash.com/docs/4.17.4#pick
  // let picked = lodash.pick(data, keys)
  let picked = lodash.pick(defaults, keys)

  return picked
}

export { sanitise }
