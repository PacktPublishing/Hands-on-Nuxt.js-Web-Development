'use strict'

import fse from 'fs-extra'

export default async function asyncModule() {
  // You can do async works here using `async`/`await`
  let pages = await fse.readJson('./pages.json')
  console.log(pages)

  // ...
}
