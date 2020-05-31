const { Keystone } = require('@keystonejs/keystone')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose')
const { StaticApp } = require('@keystonejs/app-static');

const PROJECT_NAME = 'Headless CMS'
const adapterConfig = { mongoUri: 'mongodb://localhost/headless-cms' }

const TodoSchema = require('./lists/Todo.js')
const PageSchema = require('./lists/Page.js')
const ProjectSchema = require('./lists/Project.js')
const FileSchema = require('./lists/File.js')
const SlideImageSchema = require('./lists/SlideImage.js')
const NavLinkSchema = require('./lists/NavLink.js')

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
})

keystone.createList('Todo', TodoSchema)
keystone.createList('Page', PageSchema)
keystone.createList('Project', ProjectSchema)
keystone.createList('Image', FileSchema)
keystone.createList('SlideImage', SlideImageSchema)
keystone.createList('NavLink', NavLinkSchema)

// Lowercase can be used but not File as it is already used by
// keystone internally:
// Error: There can be only one type named "File".
// Field "File.id" can only be defined once.
keystone.createList('file', FileSchema)

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: true }),
    new StaticApp({
      path: '/public',
      src: 'public'
    }),
  ],
}
