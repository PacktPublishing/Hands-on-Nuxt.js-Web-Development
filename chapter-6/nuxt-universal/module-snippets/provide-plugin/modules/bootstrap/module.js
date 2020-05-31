import path from 'path'

export default function (moduleOptions) {
  // Register `plugin.js` template
  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}
