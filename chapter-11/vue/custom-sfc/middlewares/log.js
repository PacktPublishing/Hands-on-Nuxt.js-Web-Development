'use strict'

export default (to, from, next) => {
  console.log(to.name)
  next()
}
