const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = importSchema('./schema/schema.graphql')

const schema = makeExecutableSchema({ typeDefs })

module.exports = schema
