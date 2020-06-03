'use strict'

import axios from 'axios'

let baseURL = 'https://jsonplaceholder.typicode.com'
let baseURLStatic = '/data'
if (process.client && process.static) {
  baseURL = baseURLStatic
}

const api = axios.create({ baseURL })

console.log('process.client && process.static =' , process.static)

// Stream data for static generation.
// @ref: https://github.com/stursby/nuxt-static
if (process.server && process.static) {
  const mkdirp = require('mkdirp')
  const { join, dirname } = require('path')
  const { writeFileSync } = require('fs')

  api.interceptors.response.use(
    async function(response) {
      // Do something with response data
      const path = join('./dist', baseURLStatic, response.request.path + '.json')
      console.log('Save', path)

      // Use dirname(path) to get dist/data/wp-json/api/v1/page/
      // from dist/data/wp-json/api/v1/page/about.json
      // Then use mkdirp to create directories.
      await mkdirp(dirname(path))
      writeFileSync(path, JSON.stringify(response.data))
      return response
    }, function(error) {
      // Do something with response error
      return Promise.reject(error)
    }
  )
}

export { api }
