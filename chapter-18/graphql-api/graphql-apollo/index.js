const { ApolloServer, gql } = require('apollo-server')
const { find } = require('lodash')

console.log(typeof 'ApolloServer =', ApolloServer)
console.log(typeof 'gql =', gql)

// https://www.apollographql.com/docs/apollo-server/api/apollo-server/#gql
const typeDefs = gql`
  type Planet {
    id: Int
    name: String
    age: String
    population: String
  }

  type Post {
     id: Int
     title: String
     author: Author
  }

  type Author {
     id: Int
     name: String
  }

  type Query {
     hello: String
     greet(name: String): String
     planet(name: String): Planet
     posts: [Post]
  }
`

// Dummy data.
const authors = [
  { id: 1, name: 'author A' },
  { id: 2, name: 'author B' },
  { id: 3, name: 'author C' },
]

const posts = [
  { id: 1, title: 'Post 1', authorId: 1 },
  { id: 2, title: 'Post 2', authorId: 1 },
  { id: 3, title: 'Post 3', authorId: 2 },
]

const planets = [
  { id: 3, name: "earth", age: 4543000000, population: 7594000000 },
  { id: 4, name: "mars", age: 4603000000, population: 0 },
]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    hello: () => 'Hello, world',
    greet: (root, { name }, context, info) => {
      // console.log('context =', context)
      if (!name) {
        name = 'world!'
      }
      return 'Hello ' + name
    },
    // planet: (root, args, context, info) => {
    //   return planets.find(planet => planet.name === args.name)
    // },
    // Or:
    planet (root, args, context, info) {
      return planets.find(planet => planet.name === args.name)
    },
    posts: (root, args, context, info) => posts
  },

  Planet: {
    // id: (root, args, context, info) => root.id,
    // name: (root, args, context, info) => root.name,
    // age: (root, args, context, info) => root.age,
    // population: (root, args, context, info) => root.population
  },

  Post: {
    // author (root, args, context, info) {
    //   // console.log('context =', context)
    //   // return find(authors, { id: root.authorId }) // using Lodash
    //   return authors.find(author => author.id === root.authorId)
    // }
    // Or:
    author: root => authors.find(author => author.id === root.authorId),
    // Or:
    // author: root => find(authors, { id: root.authorId }),
  },
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,

  // https://github.com/apollographql/apollo-server/issues/1376
  // https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/
  playground: {
    endpoint: '/playground',
    settings: {
      'editor.theme': 'light'
    }
  }
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
