import React from 'react'
import { connect } from 'react-redux';
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'
import Product from './Product'

const GET_PRODUCTS = gql`
  query GET_PRODUCTS($brands: [String!]) {
    products(brands: $brands) {
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
`;

const ProductList = ({ brands, selectedTypes, sortOrder }) => {
  const { data, error, loading } = useQuery(GET_PRODUCTS, {
    variables: { brands }
  })

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  return (
    <>
      <ResultInfo>
        Parfum <ResultCount>({data.products.length} Artikel)</ResultCount>
      </ResultInfo>
      <ProductContainer>
        {data.products.map(product => <Product key={product.id} {...product}/>)}
      </ProductContainer>
    </>
  )
}

/** 
 * 
 * STYLES
*/

const ResultInfo = styled.h1`
  padding: 10px 10px 6px;
  color: #292929;
  background-color: #f6f6f6;
`

const ResultCount = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.28571rem;
  color: #737373;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: flex-end;
`


const mapStateToProps = state => ({
  brands: state.filter.brands.map(brand => brand.name),
  // selectedTypes: state.filter.types,
  // sortOrder: state.sortOrder
})

export default connect(mapStateToProps)(ProductList)
