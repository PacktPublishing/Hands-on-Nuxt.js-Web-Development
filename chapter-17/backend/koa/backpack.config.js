const path = require('path')

module.exports = {
  webpack: (config, options, webpack) => {
    //backback default is running from src/ so no need of this line anymore.
    config.entry.main = './public/index.js'

    // Add module path to webpack.
    // https://webpack.js.org/configuration/resolve/#resolvemodules
    // config.resolve.modules = [
    //   '../modules'
    // ]

    // Add file paths to webpack.
    // https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve = {
      alias: {
        Configs: path.resolve(__dirname, 'configs/'),
        Core: path.resolve(__dirname, 'core/'),
        Modules: path.resolve(__dirname, 'modules/'),
        Middlewares: path.resolve(__dirname, 'middlewares/')
      }
    }

    return config
  }
}
