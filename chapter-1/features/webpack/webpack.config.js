const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    greeting: './src/greeting.js'
  },
  plugins: [
    new CleanWebpackPlugin(), // https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html'
    }),
    new ManifestPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
