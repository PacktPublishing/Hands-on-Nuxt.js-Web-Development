'use strict'

import Router from 'koa-router'
import jsdom from 'jsdom'

const { JSDOM } = jsdom
const router = new Router()

// Some hard coded html.
const html = '<!DOCTYPE html><p>Hello world</p>'

// Get the dom by calling the jsdom constructor, and giving it the html.
const dom = new JSDOM(html)

// Get the window object.
const window = dom.window

// Display hello world.
router.get('/', async (ctx, next) => {

  // Now just do whatever, just like in the browser.
  const text = window.document.querySelector("p").textContent

  ctx.type = 'json'
  ctx.body = {
    message: text // Hello World
  }
})

export default router
