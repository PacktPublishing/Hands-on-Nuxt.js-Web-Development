import * as axios from 'axios'

let options = {}
// The server-side needs a full url to work
if (process.server) {
  options.baseURL = process.env.HOST_URL
}
export default axios.create(options)
