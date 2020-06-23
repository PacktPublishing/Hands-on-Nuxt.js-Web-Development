const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// Generating multiple HTML pages with HTMLWebpackPlugin.
// https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/
// We need Nodes fs module to read directory contents
const fs = require('fs')
function generateHtmlPlugins (templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  const htmlFiles = templateFiles.filter(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]

    // Make sure only process extension with html only.
    if (extension != 'html') {
      return
    }
    return this
  })

  return htmlFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]

    // Create new HtmlWebpackPlugin with options
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
}

// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./')

module.exports = {
  entry: {
    app: './src/entry.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      // https://vue-loader.vuejs.org/guide/#manual-setup
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // '@babel/preset-env' is needed for uglifyjs-webpack-plugin as it does not compile ES6.
        // https://stackoverflow.com/questions/45901974/webpack-uglify-error-unexpected-token-keyword-function
        // https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
        options: {
          presets: ['@babel/preset-env']
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new ManifestPlugin()
  ]
  // We join our htmlPlugin array to the end
  // of our webpack plugins array.
  .concat(htmlPlugins)
}
