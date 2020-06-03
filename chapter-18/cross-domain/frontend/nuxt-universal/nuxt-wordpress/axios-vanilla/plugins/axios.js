'use strict'

import axios from 'axios'

let baseURL = process.env.remoteUrl
let baseURLStatic = '/data'
if (process.client && process.static) {
  baseURL = baseURLStatic
}

const api = axios.create({ baseURL })

// Stream data for static generation.
// @ref: https://github.com/stursby/nuxt-static
if (process.server && process.static) {
  const mkdirp = require('mkdirp')
  const { join, dirname } = require('path')
  const { writeFileSync } = require('fs')

  api.interceptors.response.use(async response => {
    const content = JSON.stringify(response.data)
    // console.log('response.data =', content)

    // Do something with response data
    const path = join('./dist', baseURLStatic, response.request.path + '.json')
    console.log('Save', path)

    // Use dirname(path) to get dist/data/wp-json/api/v1/page/
    // from dist/data/wp-json/api/v1/page/about.json
    // Then use mkdirp to create directories.
    await mkdirp(dirname(path))
    writeFileSync(path, content)
    return response
  }, error => {
    // Do something with response error
    return Promise.reject(error)
  })
}

export default (ctx, inject) => {
  // Inject axios to the context as $axios
  ctx.$axios = api
  inject('axios', api)
}
