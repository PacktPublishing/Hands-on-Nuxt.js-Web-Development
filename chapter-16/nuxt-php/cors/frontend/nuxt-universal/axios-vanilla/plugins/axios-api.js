'use strict'

import axios from 'axios'

// Usage: import axios from '~/plugins/axios-api'
// export default axios.create({
//   baseURL: 'http://localhost:8181',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// })
//
// Or:
const instance = axios.create({
  baseURL: 'http://localhost:8181',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default (ctx, inject) => {
  // Inject axios to the context as $axios
  ctx.$axios = instance
  inject('axios', instance)
}
