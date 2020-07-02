import axios from 'axios'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-packt/'
  }
} : {}

export default {
  ...routerBase,

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // Step 1: change mode to 'universal' - mode: 'universal'
  // Step 2: run 'npm run generate' to generate static data into assets dir
  // Step 3: change mode to 'static' - mode: 'static'
  // Step 4: run 'npm run generate' or 'npm run generate:gh-pages' to generate files in dist dir as usual
  // Step 5: move the data dir in assets dir into dist dir
  // Step 6: run 'npm run serve'
  // mode: 'universal',
  mode: 'spa',

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  // Note that you won't get static payloads in dist/_nuxt/static for mode: 'spa'
  target: 'static',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // Use the object syntax with the mode property ('client' or 'server')
    // https://nuxtjs.org/guide/plugins#object-syntax
    { src: '~/plugins/nuxt-client-init.js', mode: 'client' }, // only on client side
    { src: '~/plugins/axios-typicode.js' }
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  // Note that you won't get dynamic routes generated automatically for mode: 'spa'
  // Dynamic routes are ignored by the generate command. If you want Nuxt.js to
  // generate routes with dynamic params, you need to set an array of dynamic
  // routes. https://nuxtjs.org/api/configuration-generate#routes
  generate: {
    routes: async function () {
      let baseURL = 'https://jsonplaceholder.typicode.com'
      const api = axios.create({ baseURL })
      const { streamContent } = require('./assets/js/stream-content')

      api.interceptors.response.use(async response => {
        const content = JSON.stringify(response.data)
        const path = './assets/data' + response.request.path + '.json'
        console.log('path =', path)

        // Stream content.
        await streamContent(path, content)

        return response
      }, error => {
        // Do something with response error
        return Promise.reject(error)
      })

      const { data } = await api.get('https://jsonplaceholder.typicode.com/users')

      data.map(async user => {
        await api.get('https://jsonplaceholder.typicode.com/users/' + user.id)
      })

      return data.map(async user => {
        // await api.get('https://jsonplaceholder.typicode.com/users/' + user.id)
        return '/users/' + user.id
      })
    }
  }
}
