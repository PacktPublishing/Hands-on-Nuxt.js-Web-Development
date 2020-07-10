'use strict'

import mkdirp from 'mkdirp'
import { dirname } from 'path'
import { writeFileSync } from 'fs'

export const streamContent = async (path, content) => {
  // Use dirname(path) to get 'dist/data/wp-json/api/v1/page/'
  // from 'dist/data/wp-json/api/v1/page/about.json'
  // Then use mkdirp to create directories.
  await mkdirp(dirname(path))
  writeFileSync(path, content)
}
