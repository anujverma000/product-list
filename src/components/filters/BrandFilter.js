import React from 'react'
import { connect } from 'react-redux';
import { selectBrands } from '../../actions/filter'
import { resetPagination } from '../../actions/pagination'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import SelectDropDown from '../../styled-guide/SelectDropDown'

const GET_BRANDS = gql`
  {
    brands {
      name
    }
  }
`

const BrandFilter = ({ brands, setBrands, resetPagination }) => {
  
  const applyBrandSelection = brands => {
    resetPagination()
    setBrands(brands)
  }

  const { data, error, loading } = useQuery(GET_BRANDS)
  
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return <SelectDropDown optionsList={ data.brands } selectedOptions={ brands } selectorText="Brand" onSubmit={ applyBrandSelection }/>
}

const mapStateToProps = state => ({
  brands: state.filter.brands
})

const mapDispatchToProps = dispatch => ({
  setBrands: brands => dispatch(selectBrands(brands)),
  resetPagination: () => dispatch(resetPagination())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandFilter)
