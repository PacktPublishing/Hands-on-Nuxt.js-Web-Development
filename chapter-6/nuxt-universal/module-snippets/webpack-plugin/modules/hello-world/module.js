export default function (moduleOptions) {
  this.options.build.plugins.push({
    // https://webpack.js.org/contribute/writing-a-plugin/
    apply(compiler) {
      // stats is passed as argument when done hook is tapped.
      compiler.hooks.done.tap('HelloWorldPlugin', (stats) => {
        // console.log(stats)
        console.log('Hello World!')
      })
    }
  })
}
