import axios from 'axios'

// The server-side needs a full url to work
if (process.server) {
  axios.defaults.baseURL = process.env.baseUrl
}

// Or:
// https://nuxtjs.org/api/configuration-env#the-env-property
// usage: import axios from '~/plugins/axios'
// import axios from 'axios'

// let options = {}
// if (process.server) {
//   options.baseURL = process.env.baseUrl
// }

// export default axios.create(options)
