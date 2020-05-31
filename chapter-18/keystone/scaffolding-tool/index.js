const { Keystone } = require('@keystonejs/keystone')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose')

const PROJECT_NAME = 'Headless CMS'
const adapterConfig = { mongoUri: 'mongodb://localhost/headless-cms' }

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
})

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: true }),
  ],
}
