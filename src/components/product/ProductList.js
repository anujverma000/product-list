import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'
import Product from './Product'

const GET_PRODUCTS = gql`
  {
    products {
      id,
      name,
      slug,
      brand,
      type,
      image,
      price,
      size,
      rating
    }
  }
`

const ProductList = () => {
  const { data, error, loading } = useQuery(GET_PRODUCTS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  return (
    <ProductContainer>
      {data.products.map(product => <Product key={product.id} {...product}/>)}
    </ProductContainer>
  )
}

/** 
 * 
 * STYLES
*/
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default ProductList
