module.exports = {
  webpack: (config, options, webpack) => {
    //backback default is running from src/ so no need of this line anymore.
    // config.entry.main = './src/index.js'

    // Add NODE_PATH to webpack.
    // https://webpack.js.org/configuration/resolve/#resolve-modules
    // https://stackoverflow.com/questions/45894047/how-to-add-node-path-to-webpack-in-package-json
    config.resolve.modules = [
      './src',
      './src/core',
      './src/modules'
    ]
    return config
  }
}
