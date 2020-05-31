import axios from 'axios'

/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-packt/'
  }
} : {}

export default {
  ...routerBase,
  mode: 'spa',
  /*
  ** Headers of the page
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
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api1/': { target: 'http://localhost:3030/', pathRewrite: {'^/api1/': ''} },
    '/api2/': { target: 'https://jsonplaceholder.typicode.com/', pathRewrite: {'^/api2/': ''} },
  },
  auth: {
    strategies: {
      // https://auth.nuxtjs.org/schemes/local.html#options
      local: {
        endpoints: {
          login: { url: '/api1/public/login/local', method: 'post', propertyName: 'data' },
          user: { url: '/api1/private/users', method: 'get', propertyName: 'data' },
          logout: false
        },
        tokenRequired: true,
        tokenType: 'bearer',

      },
      google: {
        client_id: '472476574621-01lgfg7fd3jl35sdne1r71n15r0mi244.apps.googleusercontent.com'
      },
      github: {
        client_id: 'c9564f8e50fec82c2619',
        client_secret: '36d77566a0c3f333bb19b6f1b176d3f6cc62d8cc'
      },
    },
    // https://auth.nuxtjs.org/api/options.html#redirect
    redirect: {
      // Redirect to [...] after login from the provider, e.g. Google.
      // Must match the settings in the Google app you created.
      callback: '/login',
      // Redirect to [...] after logout.
      logout: '/login',
      // Redirect to [...] after login.
      home: '/secret'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  // Dynamic routes are ignored by the generate command. If you want Nuxt.js to
  // generate routes with dynamic params, you need to set an array of dynamic
  // routes. https://nuxtjs.org/api/configuration-generate#routes
  generate: {
    routes: async function () {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return data.map((user) => {
        return '/users/' + user.id
      })
    }
  }
}
