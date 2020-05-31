const express = require('express')
const graphqlHTTP = require('express-graphql')
const { graphql, buildSchema } = require('graphql')

const app = express()
const port = process.env.PORT || 4000

async function start() {

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
      author: {
        id: 1
      }
    },
    {
      id: 2,
      title: 'Post 2',
      author: {
        id: 1
      },
    },
    {
      id: 3,
      title: 'Post 3',
      author: {
        id: 2
      },
    },
  ]

  // Construct a schema, using GraphQL schema language
  // https://graphql.org/graphql-js/constructing-types/
  const schema = buildSchema(`
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
  `)

  // The root provides a resolver function for each API endpoint
  const rootValue = {
    hello: () => 'Hello, world',
    greet: ({ name }) => {
      if (!name) {
        name = 'world!'
      }
      return 'Hello ' + name
    },
    posts: () => posts
  }

  // Passing in a resolver through the root only works for root level fields (like fields on the Query, Mutation or Subscription types). If you wanted to provide a resolver for a field on a different type, there is no way to do so using buildSchema. Bottom line: don't use buildSchema, unless using ES6 classes: https://github.com/IvanGoncharov/swapi-demo/blob/master/src/index.ts

  // app.get('/', async (req, res) => {
  //   let query = `{ hello, greet(name: "Jane") }`
  //   let result = await graphql(schema, query)
  //   // console.log('result = ', result)
  //   res.json(result)
  // })

  app.use(
    '/graphiql',

    // GraphQL HTTP Server Middleware
    // https://github.com/graphql/express-graphql
    graphqlHTTP({
      schema, // GraphQL schema

      rootValue, // resolver functions

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
