'use strict'

export default async (ctx, next) => {
  console.log('sample middleware')
  await next()
}
