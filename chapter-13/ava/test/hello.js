'use strict'

import test from 'ava'
import hello from '../src/hello'

test('should say hello world', t => {
  t.is('hello world', hello.greet())
})
