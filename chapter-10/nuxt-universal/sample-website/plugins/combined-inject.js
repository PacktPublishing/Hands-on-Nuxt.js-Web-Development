// https://nuxtjs.org/guide/plugins#combined-inject
export default ({ app }, inject) => {
  inject('myInjectedCombinedFunction', (string) => console.log('That was easy!', string))
}
