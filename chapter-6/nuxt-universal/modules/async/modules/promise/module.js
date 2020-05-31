'use strict'

import axios from 'axios'

export default function () {
  return axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.data.map(comment => '/comments/' + comment.id))
    // .then(function (res) {
    //   return res.data.map(comment => '/comments/' + comment.id)
    // })
    .then(routes => {
      console.log(routes)
    })
}
