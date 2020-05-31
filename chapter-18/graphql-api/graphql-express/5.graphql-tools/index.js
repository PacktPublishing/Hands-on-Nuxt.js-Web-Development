const express = require('express')
const graphqlHTTP = require('express-graphql')
const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { find, filter } = require('lodash')

const app = express()
const port = process.env.PORT || 4000

async function start() {

  // Construct a schema, using GraphQL schema language
  // https://graphql.org/graphql-js/constructing-types/
  const typeDefs = `
    type Query  {
       hello: String
       greet(name: String): String
       posts: [Post]
    }

    type Post  {
       id: Int
       title: String
       author: Author
    }

    type Author  {
       id: Int
       name: String
    }
  `

  // The root provides a resolver function for each API endpoint
  const resolvers = {
    Query: {
      hello: () => 'Hello, world',
      greet: (root, { name }) => {
        if (!name) {
          name = 'world!'
        }
        return 'Hello ' + name
      },
      posts: () => posts
    },

    Post: {
      author: post => find(authors, { id: post.authorId }),
    },
  }

  // Dummy data.
  const authors = [
    {
      id: 1,
      name: 'author A',
    },
    {
      id: 2,
      name: 'author B',
    },
    {
      id: 3,
      name: 'author C',
    },
  ]
  const posts = [
    {
      id: 1,
      title: 'Post 1',
      authorId: 1,
    },
    {
      id: 2,
      title: 'Post 2',
      authorId: 1,
    },
    {
      id: 3,
      title: 'Post 3',
      authorId: 2,
    },
  ]

  const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  })

  app.get('/', async (req, res) => {
    let query = `{ hello, greet(name: "Jane") }`
    let result = await graphql(schema, query)
    // console.log('result = ', result)
    res.json(result)
  })

  app.use(
    '/graphiql',

    // GraphQL HTTP Server Middleware
    // https://github.com/graphql/express-graphql
    graphqlHTTP({
      schema, // GraphQL schema

      // If true, presents GraphQL IDE when the GraphQL endpoint is loaded in a browser.
      // https://github.com/graphql/graphiql
      graphiql: true,
    }),
  )

  // We can implement this same API without using GraphQL schema language:
  // https://graphql.org/graphql-js/constructing-types/

  // Start the server after all data has loaded.
  app.listen(port)
  console.log(`Running a GraphQL API server at localhost:${port}/graphiql`)
}

start()
