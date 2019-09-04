import React from 'react'

import Container from './styled-guide/Container'
import Header from './components/header/Header'
import FilterPanel from './components/filters/FilterPanel'
import ProductList from './components/product/ProductList'


const App = () =>
  <Container>
    <Header/>
    <FilterPanel/>
    <ProductList/>
  </Container>

export default App
