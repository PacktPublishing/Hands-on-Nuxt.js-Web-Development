'use strict'

import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null

// Init Nuxt.js and start listening on localhost:5000
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  config.mode = 'universal' // Isomorphic application
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(5000, 'localhost')
})

// Example of testing only generated html.
test('Route / exits and renders correct HTML', async (t) => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<p class="blue">My marvelous Nuxt.js project</p>'))
})

// Example of testing only generated html.
test('Route /about exits and renders correct HTML', async (t) => {
  let context = {}
  const { html } = await nuxt.renderRoute('/about', context)
  t.true(html.includes('<h1>About page</h1>'))
  t.true(html.includes('<p class="blue">Something awesome!</p>'))
})

// Example of testing via DOM checking.
test('Route /about exists and renders correct HTML and style', async (t) => {

  // Function to convert RGB code to hex code.
  function hexify (number) {
    const hexChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    if (isNaN(number)) {
      return '00'
    }
    return hexChars[(number - number % 16) / 16] + hexChars[number % 16]
  }

  const window = await nuxt.renderAndGetWindow('http://localhost:5000/about')
  const element = window.document.querySelector('.blue')
  const rgb = window.getComputedStyle(element).color.match(/\d+/g)
  // console.log('rgb = ', rgb)
  // rgb =  [ '0', '0', '255' ]
  const hex = '#' + hexify(rgb[0]) + hexify(rgb[1]) + hexify(rgb[2])

  t.not(element, null)
  t.is(element.textContent, 'Something awesome!')
  t.is(element.className, 'blue')
  t.is(hex, '#0000ff')
})


// Close the Nuxt server
test.after('Closing server', t => {
  nuxt.close()
})
