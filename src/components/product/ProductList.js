import React from 'react'
import { connect } from 'react-redux';
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'
import Product from './Product'
import NoResults from './NoResults'
import LoadMore from './LoadMore';

const GET_PRODUCTS = gql`
  query GET_PRODUCTS($brands: [String!], $types: [String!], $sort: OrderByInput) {
    products(brands: $brands, types: $types, sort: $sort, limit: 10) {
      products{
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
      total
      hasMore
    }
  }
`;

const ProductList = ({ brands, types, sort, currentPage }) => {
  const { data, error, loading } = useQuery(GET_PRODUCTS, {
    variables: { brands, types, sort }
  })
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  const { products : { products, total, hasMore }} = data;
  return (
    <>
      <ResultInfo>
        Perfume <ResultCount>({ total } article)</ResultCount>
      </ResultInfo>
      <ProductContainer>
        { total === 0 && <NoResults/> }
        { products.map(product => <Product key={product.id} {...product}/>) }
      </ProductContainer>
      { hasMore && <LoadMore currentPage = { currentPage}/> }
    </>
  )
}

/** 
 * 
 * STYLES
*/

const ResultInfo = styled.h1`
  padding: 8px 16px;
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
  justify-content: space-between;
`


const mapStateToProps = state => ({
  brands: state.filter.brands.map(brand => brand.name),
  types: state.filter.types.map(type => type.name),
  sort: state.filter.sort,
  currentPage: state.filter.page
})

export default connect(mapStateToProps)(ProductList)
