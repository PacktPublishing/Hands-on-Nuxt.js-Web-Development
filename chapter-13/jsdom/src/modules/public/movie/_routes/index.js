'use strict'

import Router from 'koa-router'
import jsdom from 'jsdom'
import axios from 'axios'

const { JSDOM } = jsdom
const router = new Router()

// Display hello world.
router.get('/', async (ctx, next) => {

  const url = 'https://www.imdb.com/movies-in-theaters/'
  const { data } = await axios.get(url)

  const dom = new JSDOM(data)
  const $ = (require('jquery'))(dom.window)

  // Start extracting the data from dom.
  var items = $('.list_item')
  var list = []
  $.each(items, function( key, item ) {
    var movieName = $('h4 a', item).text()
    var movieShowTime = $('h4 span', item).text()
    var movie = {
      name: movieName,
      showTime: movieShowTime
    }
    list.push(movie)
  })
  console.log(list)

  ctx.type = 'json'
  ctx.body = {
    list: list
  }
})

export default router
