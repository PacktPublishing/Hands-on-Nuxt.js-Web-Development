export default function (moduleOptions) {
  this.extendBuild((config, { isClient, isServer }) => {
    // Uncomment line below to view webpack rules
    // console.log("original rules =", config.module.rules)

    // Get file loader
    // https://github.com/nuxt/nuxt.js/issues/1584#issuecomment-338310952
    const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
    console.log("found rule =", rule)

    // Modify test
    rule.test = /\.(png|jpe?g|gif|webp)$/i

    // Check if the `test` is updated
    // const test = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|webp)$/i')
    // console.log("found new rule =", test)

    // Or:
    // Remove file loader
    // config.module.rules.splice(config.module.rules.indexOf(rule), 1)

    // Re-add file loader
    // config.module.rules.push({
    //   test: /\.(png|jpe?g|gif|webp)$/,
    //   loader: 'url-loader',
    //   // exclude: /(assets\/svg)/,
    //   query: {
    //     limit: 1000, // 1KO
    //     name: 'img/[name].[hash:7].[ext]',
    //   },
    // })

    // Push `svg-transform-loader` loader
    // Webpack loader to add/modify tags and attributes in SVG image. Main
    // purpose - fill, stroke and other manipulations with image imported from
    // CSS/SCSS/LESS/Stylus/PostCSS.
    // https://www.npmjs.com/package/svg-transform-loader
    // https://jetbrains.github.io/svg-mixer/packages/svg-transform-loader/
    config.module.rules.push({
      test: /\.svg(\?.*)?$/, // match img.svg and img.svg?param=value
      use: [
        'url-loader', // or file-loader or svg-url-loader
        'svg-transform-loader'
      ]
    })

    // Push the loader the plugin - if needed
    // config.plugins.push(new SpriteLoaderPlugin())

    // Uncomment line below to view webpack rules
    // console.dir("new rules =", config.module.rules)
    // console.log("new rules =", config.module.rules)
    // console.log("new plugins =", config.plugins)
  })
}
