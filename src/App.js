import React from 'react'
import Container from './styled-guide/Container'
import ProductList from './components/product/ProductList'
import FilterPanel from './components/filters/FilterPanel'

const App = () =>
  <Container>
    <FilterPanel/>
    <ProductList/>
  </Container>

export default App
