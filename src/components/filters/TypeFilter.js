import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import SelectDropDown from '../../styled-guide/SelectDropDown'

const GET_TYPES = gql`
  {
    types {
      name
    }
  }
`

const TypeFilter = () => {
  const { data, error, loading } = useQuery(GET_TYPES)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return <SelectDropDown optionsList={data.types} selectorText="Select Type"></SelectDropDown>
}

export default TypeFilter
