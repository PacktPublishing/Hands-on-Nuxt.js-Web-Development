import axios from '~/plugins/axios-api'

export default async ({ store, error }) => {
  if (!store.state.auth.token) {
    error({
      message: 'No JWT token',
      statusCode: 403
    })
  }

  // Set 'Authorization' header on axios instance:
  // https://stackoverflow.com/a/45581882/413225
  axios.defaults.headers.common['Authorization'] = `Bearer: ${store.state.auth.token}`
}
