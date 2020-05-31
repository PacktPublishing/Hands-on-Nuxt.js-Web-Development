const { GraphQLServer } = require('graphql-yoga')
const { find, filter } = require('lodash')

// A schema is a collection of type definitions (hence "typeDefs")
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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
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
};

// The GraphQLServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new GraphQLServer({
  typeDefs,
  resolvers,

  // https://github.com/apollographql/apollo-server/issues/1376
  // https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/
  // playground: {
  //   endpoint: '/playground',
  //   settings: {
  //     'editor.theme': 'light'
  //   }
  // }
})

// The `start` method launches a web server.
server.start(() => console.log('Server is running on localhost:4000'))
