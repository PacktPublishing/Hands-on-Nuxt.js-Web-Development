'use strict'

import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'
const api = axios.create({ baseURL })

export default (ctx, inject) => {
  // Inject axios to the context as $axiosTypicode
  ctx.$axiosTypicode = api
  inject('axiosTypicode', api)
}
