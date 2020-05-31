'use strict'

import axios from 'axios'

export default function asyncModule() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map(user => '/users/' + user.username))
    // .then(function (res) {
    //   return res.data.map(user => '/users/' + user.username)
    // })
    .then(routes => {
      console.log(routes)
    })
}
