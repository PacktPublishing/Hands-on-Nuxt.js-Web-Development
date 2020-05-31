'use strict'

export default (to, from, next) => {
  // eslint-disable-next-line
  console.log(to.name)
  next()
}
