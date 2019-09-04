import React from 'react'
import { connect } from 'react-redux';
import { selectTypes } from '../../actions/filter'
import { resetPagination } from '../../actions/pagination'
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

const TypeFilter = ({ types, setTypes, resetPagination }) => {

  const applyTypeSelection = types => {
    resetPagination()
    setTypes(types)
  }

  const { data, error, loading } = useQuery(GET_TYPES)
  
  
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return <SelectDropDown optionsList={ data.types } selectedOptions={ types } selectorText="Product Type" onSubmit={ applyTypeSelection }/>
}


const mapStateToProps = state => ({
  types: state.filter.types
})

const mapDispatchToProps = dispatch => ({
  setTypes: types => dispatch(selectTypes(types)),
  resetPagination: () => dispatch(resetPagination())
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter)

