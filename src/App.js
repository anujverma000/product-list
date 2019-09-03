import React from 'react'
import Container from './styled-guide/Container'
import Brands from './Brands'
import Types from './Types'
import ProductList from './components/product/ProductList'

function App() {
  return (
    <Container>
      <Brands/>
      <Types/>
      <ProductList/>
    </Container>
  )
}

export default App
