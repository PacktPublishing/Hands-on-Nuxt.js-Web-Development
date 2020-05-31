// https://nuxtjs.org/guide/plugins#combined-inject
export default ({ app }, inject) => {
  inject('multiply', (x, y) => x * y)
}
