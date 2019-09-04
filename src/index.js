import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import rootReducer from './reducers'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from './ApolloClient'

const store = createStore(combineReducers(rootReducer))

const Root = () => (
  <ApolloProvider client={ApolloClient}>
    <ApolloHooksProvider client={ApolloClient}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>,
   </ApolloHooksProvider>
  </ApolloProvider>
)


ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()
