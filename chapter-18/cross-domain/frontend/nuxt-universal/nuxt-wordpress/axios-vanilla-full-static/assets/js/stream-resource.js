'use strict'

import axios from 'axios'
import fs from 'fs'

export const streamResource = async (src, last) => {
  const file = fs.createWriteStream('./assets/images/' + last)

  // Stream the image to a file on the disc.
  const { data } = await axios({
    url: src,
    method: 'GET',
    responseType: 'stream'
  })
  data.pipe(file)
}

// export { streamResource }
