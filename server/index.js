const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const root = require('./resolvers')

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({ schema, rootValue: root, graphiql: false }))

const port = process.env.PORT || 4000
app.listen(port)
console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
