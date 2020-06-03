'use strict'

import axios from 'axios'

let baseURL = process.env.remoteUrl
let baseURLStatic = '/data'
if (process.client && process.static) {
  baseURL = baseURLStatic
}

const api = axios.create({ baseURL })

// Keep this for experiments.
// api.interceptors.request.use(config => {
//   const configData = config.data
//   console.log('plugins/axios.js:  config.url =', config.url)
//   // Intercept the post params
//   // console.log('plugins/axios.js: config.data =', config.data)
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// api.interceptors.response.use(response => {
//   // Intercept the post params
//   // console.log('plugins/axios.js: response.config =', response.config)
//   // if (response.config.parse) {
//   //   // perform the manipulation here and change the response object
//   // }
//   return response
// }, error => {
//   return Promise.reject(error.message);
// })

if(process.client && process.static) {
  api.interceptors.request.use(config => {
    const configData = config.data

    // Add static path to the request URL so you will get:
    // '/admin/api' + '/projects/1' etc
    config.url = config.url + configData.staticPath
    return config
  }, error => {
    return Promise.reject(error)
  })
}

// Stream data for static generation.
// @ref: https://github.com/stursby/nuxt-static
if (process.server && process.static) {
  const mkdirp = require('mkdirp')
  const { join, dirname } = require('path')
  const { writeFileSync, existsSync } = require('fs')

  api.interceptors.response.use(async response => {
    const configData = JSON.parse(response.config.data)
    const content = JSON.stringify(response.data)
    // console.log('configData =', configData)
    // console.log('response.data =', JSON.stringify(response.data))

    // Do something with response data
    const path = join('./dist', baseURLStatic, response.request.path, configData.staticPath + '.json')

    console.log('Save', path)
    console.log('exist =', path,  existsSync(path))
    // Use dirname(path) to get dist/data/wp-json/api/v1/page/
    // from dist/data/wp-json/api/v1/page/about.json
    // Then use mkdirp to create directories.
    console.log('dirname(path) =', dirname(path))
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
