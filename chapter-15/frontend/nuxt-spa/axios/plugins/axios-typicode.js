'use strict'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default (ctx, inject) => {
  // Inject axios to the context as $axiosTypicode
  ctx.$axiosTypicode = instance
  inject('axiosTypicode', instance)
}
