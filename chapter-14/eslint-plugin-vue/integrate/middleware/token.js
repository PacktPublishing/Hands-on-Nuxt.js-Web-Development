// https://nuxtjs.org/guide/routing#middleware
export default async ({ store, error, $axios }) => {
  if (!store.state.auth.token) {
    error({
      message: 'No JWT token',
      statusCode: 403,
    })
  }

  // Adds header: `Authorization: 123` to all requests
  // https://axios.nuxtjs.org/helpers#setheader-name-value-scopes-common
  $axios.setHeader('Authorization', `Bearer: ${store.state.auth.token}`)
}
