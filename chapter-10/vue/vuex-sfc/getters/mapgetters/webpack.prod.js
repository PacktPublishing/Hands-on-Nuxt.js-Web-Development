const merge = require('webpack-merge');
const common = require('./webpack.common.js')

// Minimizing and extracting for production
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // A webpack plugin to remove/clean your build folder(s).
    // https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      // https://github.com/webpack-contrib/terser-webpack-plugin
      // https://stackoverflow.com/questions/45901974/webpack-uglify-error-unexpected-token-keyword-function?rq=1
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
        // Remove Comments
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    // https://webpack.js.org/guides/code-splitting#prevent-duplication
    splitChunks: {
      chunks: 'all'
    },
  },
})
