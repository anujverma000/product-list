import React from 'react'
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

const BrandFilter = () => {
  const { data, error, loading } = useQuery(GET_BRANDS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return <SelectDropDown optionsList={data.brands} selectorText="Brand"></SelectDropDown>
}

export default BrandFilter
