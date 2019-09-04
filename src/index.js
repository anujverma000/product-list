import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from './ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'


const Root = () => (
  <ApolloProvider client={ApolloClient}>
    <ApolloHooksProvider client={ApolloClient}>
      <App />
   </ApolloHooksProvider>
  </ApolloProvider>
)


ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()
