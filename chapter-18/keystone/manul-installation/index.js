const { Keystone } = require('@keystonejs/keystone')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose')
const { Text } = require('@keystonejs/fields')

const keystone = new Keystone({
  name: 'My Keystone Project',
  adapter: new MongooseAdapter({ mongoUri: 'mongodb://localhost/keystone-minimal' }),
})

keystone.createList('Page', {
  fields: {
    name: { type: Text },
  },
})

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp()]
}
