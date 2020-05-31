// https://nuxtjs.org/guide/plugins#inject-into-context
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.$square = (x) => x * x
}
