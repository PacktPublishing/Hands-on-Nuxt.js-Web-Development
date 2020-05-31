'use strict'

// https://dev.to/sadarshannaiynar/capture-error-and-data-in-async-await-without-try-catch-1no2
// https://stackoverflow.com/questions/50210289/get-data-using-await-async-without-try-catch
// const wrapper = promise => (
//   promise
//     .then(data => ({ data, error: null }))
//     .catch(error => ({ error, data: null }))
// )

export default promise => (
  promise
    .then(data => ({ data, error: null }))
    .catch(error => ({ error, data: null }))
)

// Or:
// export default function (promise) {
//   return promise
//     .then(function(data) {
//        return { data, error: null }
//     })
//     .catch(function(error) {
//       return { error, data: null }
//     })
// }

// Or:
// async function example1 () {
//   return 'example 1'
// }

// async () => {
//   return 'example 2'
// }

// function promise (promise) {
//   return promise
//     .then(function(data) {
//        return { data, error: null }
//     })
//     .catch(function(error) {
//       return { error, data: null }
//     })
// }

// export { promise, example1, example2 }
// or:
// module.exports = { promise, example1, example2 }

// Or:
// https://stackoverflow.com/questions/45781063/nodejs-how-group-and-export-multiple-functions-in-a-separate-file
// export const example1 = async () => {
//    return 'example 1'
// }

// export const example2 = async () => {
//    return 'example 2'
// }

// Or:
// export default {
//   async example1 () {
//     return 'example 1'
//   },
//   async example2 () {
//     return 'example 2'
//   }
// }
