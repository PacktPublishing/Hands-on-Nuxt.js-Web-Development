'use strict'

import test from 'ava'
import add from '../src/add'

test('amount should be 50', t => {
  t.is(add(10, 50), 60)
})
