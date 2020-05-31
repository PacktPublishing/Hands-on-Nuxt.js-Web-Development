const express = require('express')
const graphqlHTTP = require('express-graphql')
const { find, filter } = require('lodash')

// The JavaScript reference implementation for GraphQL
// https://graphql.org/graphql-js/
// https://github.com/graphql/graphql-js
const {
  graphql,
  GraphQLSchema,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql')

const app = express()
const port = process.env.PORT || 4000

async function start () {
  // Raw approach, this uses the primitives exposed by the graphql library.
  // The raw approach is meant to show you what goes on under the hood.

  const tags = [
    {
      id: 1,
      name: 'tag A',
    },
    {
      id: 2,
      name: 'tag B',
    },
    {
      id: 3,
      name: 'tag C',
    },
  ]

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
      },
      tags: [
        {
          id: 1
        },
        {
          id: 2
        },
      ],
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

  // Default resolver
  // https://www.apollographql.com/docs/graphql-tools/resolvers/
  // https://www.apollographql.com/docs/graphql-tools/resolvers/#default-resolver
  // You don't need to specify resolvers for every type in your schema. If you
  // don't specify a resolver, GraphQL.js falls back to a default one, which
  // does the following:

  // 1. Returns a property from obj with the relevant field name, or
  // 2. Calls a function on obj with the relevant field name and passes the query arguments into that function

  // So, in the example query above, the name and title fields wouldn't need a
  // resolver if the Post and Author objects retrieved from the backend already
  // had those fields.
  let Planet = new GraphQLObjectType({
    name: 'Planet',
    fields: {
      name: {
        type: GraphQLString,
        // resolve(rootObj) {
        //   console.log('rootObj =', rootObj)
        //   console.log('Provided name', obj.name);
        //   return 'Earth'
        // },
      },
      age: { type: GraphQLInt },
      population: { type: GraphQLInt },
    }
  })

  // Custom type: Tag
  let Tag = new GraphQLObjectType({
    name: 'Tag',
    fields: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
    }
  })

  // Custom type: Author
  let Author = new GraphQLObjectType({
    name: 'Author',
    fields: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
    }
  })

  // Custom type: Post
  let Post = new GraphQLObjectType({
    name: 'Post',
    fields: {
      id: {
        type: GraphQLInt,
        // resolve(rootObj) {
        //   console.log('rootObj =', rootObj)
        // },
      },
      title: {
        type: GraphQLString,
        // resolve(rootObj) {
        //   console.log('rootObj =', rootObj)
        // },
      },
      author: {
        type: Author,
        resolve(rootObj) {
          console.log('rootObj =', rootObj)
          return authors.find(e => e.id === rootObj.author.id)
        },
      },
      tags: {
        type: new GraphQLList(Tag),
        resolve(rootObj) {
          console.log('rootObj =', rootObj)

          if (rootObj.tags === undefined) {
            return []
          }
          const tagsInParent = []
          rootObj.tags.forEach(tag => {
            tagsInParent.push(find(tags, { id: tag.id }))
          })
          return tagsInParent
        },
      },
    }
  })

  // The Query type.
  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return 'world'
          },
        },

        greet: {
          type: GraphQLString,
          // `args` describes the arguments that the `greet` query accepts
          args: {
            name: {
              type: GraphQLString
            }
          },
          resolve(rootObj, { name }) {
            if (!name) {
              name = 'world!'
            }
            return 'Hello ' + name
          },
        },

        getPlanetMars: {
          type: Planet,
          resolve() {
            return {
              name: 'Mars'
            }
          },
        },

        author: {
          type: Author,
          // `args` describes the arguments that the `greet` query accepts
          args: {
            id: {
              type: GraphQLInt
            }
          },
          resolve(rootObj, args) {
            return authors.find(e => e.id === args.id)
          },
        },

        posts: {
          type: new GraphQLList(Post),
          // `args` describes the arguments that the `greet` query accepts
          args: {
            author: {
              type: GraphQLInt
            }
          },
          resolve(rootObj, { author }) {
            if (author === undefined) {
              return posts
            }
            return filter(posts, { 'author': { id: author } })
          },
        },
      },
    }),
  })

  app.get('/', async (req, res) => {
    let query = `{ hello, greet(name: 'Jane') }`
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

  // http://localhost:4000/graphiq
  // 1:
  // query {
  //   hello
  //   greet(name: 'John')
  // }
  // 2:
  // query {
  //   author (id: 1) {
  //     id
  //     name
  //   }
  // }
  // 3:
  // query {
  //   posts (author: 1) {
  //     id
  //     title
  //     author {
  //       name
  //     }
  //     tags {
  //       name
  //     }
  //   }
  // }

  // Start the server after all data has loaded.
  app.listen(port)
  console.log(`Running a GraphQL API server at localhost:${port}/graphiql`)
}

start()
