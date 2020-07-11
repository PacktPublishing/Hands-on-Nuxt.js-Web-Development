'use strict'

export default (...args) => (to, from, next) => {
  args.forEach(arg => {
    arg(to, from, next)
  })
}
