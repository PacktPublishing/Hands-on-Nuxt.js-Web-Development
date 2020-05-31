import path from 'path'

export default function (moduleOptions) {
  // Register `plugin.js` template
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      // Nuxt will replace `options.url` with `https://jsonplaceholder.typicode.com/users` when copying plugin to project
      url: 'https://jsonplaceholder.typicode.com/users',

      // conditional parts with dev will be stripped from plugin code on production builds
      debug: this.options.dev
    }
  })
}
