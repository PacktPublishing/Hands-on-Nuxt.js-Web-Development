export default function (moduleOptions) {
  this.nuxt.hook('modules:done', moduleContainer => {
    console.log('All modules are loaded')
  })
}
