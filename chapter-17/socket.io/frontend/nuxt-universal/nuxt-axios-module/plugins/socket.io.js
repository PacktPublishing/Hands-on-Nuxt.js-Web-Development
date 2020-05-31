'use strict'

import io from 'socket.io-client'

// console.log('process.env.remoteUrl = ', process.env.remoteUrl)

const remoteUrl = process.env.remoteUrl
const socket = io(remoteUrl)

export default socket
