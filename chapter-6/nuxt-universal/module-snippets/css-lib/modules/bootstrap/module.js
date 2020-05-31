import path from 'path'

export default function (moduleOptions) {

  // `options` will contain debug and styles
  const options = Object.assign({}, this.options.bootstrap, moduleOptions)

  // Check if it is set to be false in the top level options
  if (options.styles !== false) {
    this.options.css.push('bootstrap/dist/css/bootstrap.css')
    this.options.css.push('bootstrap-vue/dist/bootstrap-vue.css')
  }

  // Register `plugin.js` template
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  })
}
