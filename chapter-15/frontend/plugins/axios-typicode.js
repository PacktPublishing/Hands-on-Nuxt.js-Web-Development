'use strict'

import axios from 'axios'

// console.log('process.client =', process.client)
// console.log('process.static =' , process.static)
// console.log('process.server =', process.server)

let baseURL = 'https://jsonplaceholder.typicode.com'
let baseURLStatic = '/data'
if (process.client && process.static) {
  baseURL = baseURLStatic
}

const api = axios.create({ baseURL })

// Intercept the request by adding .json to the request url.
if (process.client && process.static) {
  api.interceptors.request.use(config => {
    config.url = config.url + '.json'
    return config
  })
}

// Stream data for static generation.
// @ref: https://github.com/stursby/nuxt-static
if (process.server && process.static) {
  const { streamContent } = require('~/assets/js/stream-content')

  api.interceptors.response.use(async response => {
    const content = JSON.stringify(response.data)
    const path = './assets' + baseURLStatic + response.request.path + '.json'
    console.log('path =', path)

    // Stream content.
    await streamContent(path, content)

    return response
  }, error => {
    // Do something with response error
    return Promise.reject(error)
  })
}

export default (ctx, inject) => {
  // Inject axios to the context as $axiosTypicode
  ctx.$axiosTypicode = api
  inject('axiosTypicode', api)
}
