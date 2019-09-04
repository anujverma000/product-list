import React from 'react'

import Container from './styled-guide/Container'
import Header from './components/header/Header'
import FilterPanel from './components/filters/FilterPanel'
import ProductList from './components/product/ProductList'
import Footer from './components/footer/Footer';
import SortPanel from './components/filters/SortPanel';


const App = () =>
  <Container>
    <Header/>
    <FilterPanel/>
    <SortPanel/>
    <ProductList/>
    <Footer/>
  </Container>

export default App
