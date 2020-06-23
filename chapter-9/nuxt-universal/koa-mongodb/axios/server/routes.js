'use strict'

import Router from 'koa-router'
import Mongo from './mongo'
const mongo = new Mongo()
const router = new Router({ prefix: '/api' })

// Home page.
router.get('/', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Hello World!'
  }
})

// Get all users.
router.get('/users', async (ctx, next) => {
  let result
  try {
    // Get the connection.
    const connection = await mongo.connect()

    // Get the collection.
    const collectionUsers = connection.collection('users')

    // Find all docs.
    result = await collectionUsers.find().toArray()

    // Close the connection.
    mongo.close()
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err)
  }

  ctx.type = 'json'
  ctx.body = result
})

// Get the user by id.
router.get('/users/:id', async (ctx, next) => {
  // const id = parseInt(ctx.params.id) // or ctx.request.params.id
  const id = ctx.params.id

  let result
  try {
    // Get the connection.
    const connection = await mongo.connect()

    // Get the collection.
    const collectionUsers = connection.collection('users')

    // Find one doc.
    // https://stackoverflow.com/questions/48294613/mongo-find-function-wont-exclude-id
    result = await collectionUsers.findOne({
      _id: mongo.objectId(id)
    })
    mongo.close()
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err)
  }

  if (result) {
    ctx.type = 'json'
    ctx.body = result
  } else {
    ctx.throw(404, 'user not found')
  }
})

// Add a user.
router.post('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {}

  if (body.name === undefined) {
    ctx.throw(400, 'name is undefined')
  }
  if (body.slug === undefined) {
    ctx.throw(400, 'slug is undefined')
  }
  if (body.name === '') {
    ctx.throw(400, 'name is required')
  }
  if (body.slug === '') {
    ctx.throw(400, 'slug is required')
  }

  let result
  try {
    // Get the connection.
    const connection = await mongo.connect()

    // Get the collection.
    const collectionUsers = connection.collection('users')

    // Find one doc.
    const found = await collectionUsers.findOne({
      slug: body.slug
    })
    if (found) {
      ctx.throw(404, 'slug has been taken')
    }

    // Insert a doc.
    result = await collectionUsers.insertOne({
      name: body.name,
      slug: body.slug,
      // username: body.username,
      // password: body.password,
      // email: body.email
    })
    mongo.close()
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err)
  }

  if (result) {
    ctx.type = 'json'
    ctx.body = result.ops
  } else {
    ctx.throw(404, 'insert user failed')
  }
})

// Update a user.
router.put('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {}

  if (body.id === undefined) {
    ctx.throw(400, 'id is undefined')
  }
  if (body.name === undefined) {
    ctx.throw(400, 'name is undefined')
  }
  if (body.slug === undefined) {
    ctx.throw(400, 'slug is undefined')
  }
  if (body.id === '') {
    ctx.throw(400, 'id is required')
  }
  if (body.name === '') {
    ctx.throw(400, 'name is required')
  }
  if (body.slug === '') {
    ctx.throw(400, 'slug is required')
  }

  let result
  try {
    // Get the connection.
    const connection = await mongo.connect()

    // Get the collection.
    const collectionUsers = connection.collection('users')

    // Find one doc except itself.
    const found = await collectionUsers.findOne({
      slug: body.slug,
      // https://docs.mongodb.com/manual/reference/operator/query/ne/#op._S_ne
      // https://stackoverflow.com/questions/18439612/mongodb-find-all-except-from-one-or-two-criteria
      _id: { $ne: mongo.objectId(body.id) }
    })
    if (found) {
      ctx.throw(404, 'slug has been taken')
    }

    // Update a doc.
    result = await collectionUsers.updateOne({
      _id: mongo.objectId(body.id)
    }, {
       $set: { name: body.name, slug: body.slug },
       $currentDate: { lastModified: true }
    })
    mongo.close()
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err)
  }

  if (result) {
    ctx.type = 'json'
    ctx.body = result.result
  } else {
    ctx.throw(404, 'insert user failed')
  }
})

// Delete a user.
router.del('/user', async (ctx, next) => {
  // Get the parsed data.
  let body = ctx.request.body || {}

  if (body.id === undefined) {
    ctx.throw(400, 'id is undefined')
  }
  if (body.id === '') {
    ctx.throw(400, 'id is required')
  }

  let result
  try {
    // Get the connection.
    const connection = await mongo.connect()

    // Get the collection.
    const collectionUsers = connection.collection('users')

    // Find one doc.
    const found = await collectionUsers.findOne({
      _id: mongo.objectId(body.id)
    })
    if (!found) {
      ctx.throw(404, 'no user found')
    }

    // Delete a doc.
    result = await collectionUsers.deleteOne({
      _id: mongo.objectId(body.id)
    })
    mongo.close()
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err)
  }

  if (result) {
    ctx.type = 'json'
    ctx.body = result.result
  } else {
    ctx.throw(404, 'delete user failed')
  }
})

export default router
