'use strict'

import mkdirp from 'mkdirp'
import { dirname } from 'path'
import { writeFileSync, existsSync } from 'fs'

export const streamContent = async (path, content) => {
  console.log('assets/js/stream-content.js: path =', path)
  console.log('assets/js/stream-content.js: exist =', path,  existsSync(path))

  // Use dirname(path) to get 'dist/data/wp-json/api/v1/page/'
  // from 'dist/data/wp-json/api/v1/page/about.json'
  // Then use mkdirp to create directories.
  await mkdirp(dirname(path))
  writeFileSync(path, content)
}
