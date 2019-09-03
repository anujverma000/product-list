import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const Root = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
   </ApolloHooksProvider>
  </ApolloProvider>
)


ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()
