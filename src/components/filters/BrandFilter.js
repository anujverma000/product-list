import React from 'react'
import { connect } from 'react-redux';
import { selectBrands } from '../../actions/filter'
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

const BrandFilter = ({ brands, setBrands }) => {
  const { data, error, loading } = useQuery(GET_BRANDS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return <SelectDropDown optionsList={ data.brands } selectedOptions={ brands } selectorText="Brand" onSubmit={ setBrands }/>
}

const mapStateToProps = state => ({
  brands: state.filter.brands
})

const mapDispatchToProps = dispatch => ({
  setBrands: brands => dispatch(selectBrands(brands)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandFilter)
