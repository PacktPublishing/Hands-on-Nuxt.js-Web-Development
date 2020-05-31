export default function (moduleOptions) {
  this.options.build.plugins.push({
    // Source origin:
    // https://webpack.js.org/contribute/writing-a-plugin/#example
    apply(compiler) {
      // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
      compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
        // Create a header string for the generated file:
        var filelist = 'In this build:\n\n'

        // Loop through all compiled assets,
        // adding a new line item for each filename.
        for (var filename in compilation.assets) {
          filelist += '- ' + filename + '\n'
        }

        // Run `$ npm run dev` and `$ npm run build` to see the difference in the output.
        console.log(filelist)

        // Insert this list into the webpack build as a new file asset:
        compilation.assets['filelist.md'] = {
          source: function() {
            return filelist
          },
          size: function() {
            return filelist.length
          }
        }

        callback()
      })
    }
  })
}
