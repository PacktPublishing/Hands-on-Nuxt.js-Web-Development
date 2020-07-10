'use strict'

import axios from 'axios'

let baseURL = process.env.remoteUrl
const api = axios.create({ baseURL })

export default (ctx, inject) => {
  // Inject axios to the context as $axios
  ctx.$axios = api
  inject('axios', api)
}
