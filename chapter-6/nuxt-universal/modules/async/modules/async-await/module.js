'use strict'

import axios from 'axios'

export default async function () {
  let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  let routes = data.map(post => '/posts/' + post.id)
  console.log(routes)
}
