// https://nuxtjs.org/guide/plugins#name-conventional-plugin
export default ({ app }, inject) => {
  inject('subtract', (x, y) => x - y)
}
