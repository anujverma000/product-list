const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')

const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const root = require('./resolvers')


const app = express()
const env = app.get('env')
const isDev =  env !== 'production'

const normalisePort = port => parseInt(port, 10)
const PORT = normalisePort(process.env.PORT || 4000)

// TODO: Optimize cors to whitelist domains
app.use(cors())

if(!isDev){
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))
}

if(isDev){
  app.use(morgan('dev'))
}

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use('/graphql', graphqlHTTP({ schema, rootValue: root, graphiql: isDev }))

// TODO: Improve health check with @godaddy/terminus
app.get("/health", function (req, res) {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server Started !`)
})
