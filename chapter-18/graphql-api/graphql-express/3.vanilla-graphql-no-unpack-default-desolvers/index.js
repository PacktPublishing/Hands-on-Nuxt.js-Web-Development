const express = require('express')
const graphqlHTTP = require('express-graphql')
const graphql = require('graphql')

const app = express()
const port = process.env.PORT || 4000

console.log("graphql.GraphQLSchema =", typeof graphql.GraphQLSchema)
console.log("graphql.GraphQLObjectType =", typeof graphql.GraphQLObjectType)
console.log("graphql.GraphQLString =", typeof graphql.GraphQLString)
console.log("graphql.GraphQLInt =", typeof graphql.GraphQLInt)
console.log("graphql.GraphQLList =", typeof graphql.GraphQLList)
console.log("graphql.graphql =", typeof graphql.graphql)

async function start () {
  // Raw approach, this uses the primitives exposed by the graphql library.
  // The raw approach is meant to show you what goes on under the hood.

  const planets = [
    {
      id: 3,
      name: "earth",
      age: 4543000000,
      population: 7594000000,
    },
    {
      id: 4,
      name: "mars",
      age: 4603000000,
      population: 0,
    },
  ]

  const planetType = new graphql.GraphQLObjectType({
    name: 'Planet',
    fields: {
      id: {
        type: graphql.GraphQLInt,
        resolve: (root, orgs, context, info) => 2,
        // Or:
        // resolve (root, orgs, context, info) {
        //   return root.id
        // },
      },
      name: {
        type: graphql.GraphQLString,
        // resolve: (root, orgs, context, info) => root.name,
        // Or:
        // resolve (root, orgs, context, info) {
        //   return root.name
        // },
      },
      age: {
        // Numeric integer values larger than 32‐bit should either use
        // String or a custom‐defined Scalar type, as not all
        // platforms and transports support encoding integer numbers
        // larger than 32‐bit.
        // So, encode this kind of long value to string.
        type: graphql.GraphQLString,
        // resolve: (root, orgs, context, info) => root.age,
        // Or:
        // resolve (root, orgs, context, info) {
        //   // console.log('context =', context)
        //   console.log('info =', info)
        //   console.log('root =', root) // 'a planet' if the parent resolves this value.
        //   return root.age
        // },
      },
      population: {
        type: graphql.GraphQLString,
        // resolve: (root, orgs, context, info) => root.population,
        // Or:
        // resolve (root, orgs, context, info) {
        //   return root.population
        // },
      },
    }
  })

  // Define the Query type
  const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: graphql.GraphQLString,
        resolve: (root, args, context, info) => 'world',
        // Or:
        // resolve (root, args, context, info) {
        //   console.log('root =', root) // undefined
        //   return 'world'
        // },
      },

      planet: {
        type: planetType,
        args: {
          name: {
            type: graphql.GraphQLString
          }
        },
        resolve (root, args, context, info) {
          // console.log('context =', context)
          // console.log('info from Query =', info)
          // console.log('root =', root) // undefined
          // return 'a planet'
          return planets.find(planet => planet.name === args.name)
        },
      },

      planets: {
        type: graphql.GraphQLList(planetType),
        resolve (root, args, context, info) {
          return planets
        },
        // Or:
        // resolve: (root, args, context, info) => planets,
      },
    },
  })

  // Construct the schema with the resolvers.
  const schema = new graphql.GraphQLSchema({ query: queryType, description: 'A GraphQL schema', })

  app.get('/', async (req, res) => {
    // console.log('req =', req)
    let query = `{ hello }`
    let result = await new graphql.graphql(schema, query)
    res.json(result)
  })

  app.use(
    '/graphiql',

    // GraphQL HTTP Server Middleware
    // https://github.com/graphql/express-graphql
    graphqlHTTP({
      schema, // GraphQL schema

      context: {
        something: 'something to be shared'
      },

      // If true, presents GraphQL IDE when the GraphQL endpoint is loaded in a browser.
      // https://github.com/graphql/graphiql
      graphiql: true,
    }),

    // Or:
    // graphqlHTTP(async (req, res, graphQLParams) => ({
    //   schema: schema,
    //   context: {
    //     'something': 'something to be shared',
    //     'req': req
    //   },
    //   // rootValue: await someFunctionToGetRootValue(request),
    //   graphiql: true,
    // }))
  )

  // http://localhost:4000/graphiq
  // query {
  //   hello
  //   planets
  //   planet (name: "earth") {
  //    id
  //    age
  //   }
  // }

  // Start the server after all data has loaded.
  app.listen(port)
  console.log(`Running a GraphQL API server at localhost:${port}/graphiql`)
}

start()
