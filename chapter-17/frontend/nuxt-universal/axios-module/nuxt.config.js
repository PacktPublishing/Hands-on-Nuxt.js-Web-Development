// Host base.
const protocol = 'http'
const host = process.env.NODE_ENV === 'production' ? 'a-cool-domain-name.com' : 'localhost'
// console.log('process.env.NODE_ENV = ', process.env.NODE_ENV)

// Cross domain ports.
const ports = {
  local: '8000',
  remote: '4000'
}

const remoteUrl = protocol + '://' + host + ':' + ports.remote + '/'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

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

  // The env property defines environment variables that should be available on the client side.
  // https://nuxtjs.org/api/configuration-env#the-env-property
  env: {
    // This lets you create a baseUrl property that will be equal to the
    // BASE_URL environment variable if defined, otherwise, equal to
    // 'http://localhost:3000'
    baseUrl: process.env.BASE_URL || protocol + '://' + host + ':' + ports.local,

    // Set remote URL for socket.io.
    remoteUrl
  },

  // https://nuxtjs.org/api/configuration-server
  server: {
    port: ports.local, // default: 3000
    host: host, // default: localhost,
    timing: false,

    // Production.
    // HTTPS configuration.
    // https://nuxtjs.org/api/configuration-server/#example-using-https-configuration
    // https://stackoverflow.com/questions/56966137/how-to-run-nuxt-npm-run-dev-with-https-in-localhost
    // https: {
    //   key: fs.readFileSync(sslPath + 'privkey.pem'),
    //   cert: fs.readFileSync(sslPath + 'fullchain.pem')
    // }
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
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  // https://axios.nuxtjs.org/options#proxy
  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api/': {
      target: remoteUrl,
      pathRewrite: {'^/api/': ''}
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
  }
}
