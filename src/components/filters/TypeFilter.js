import React from 'react'
import { connect } from 'react-redux';
import { selectTypes } from '../../actions/filter'
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

const TypeFilter = ({ types, setTypes }) => {
  const { data, error, loading } = useQuery(GET_TYPES)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return <SelectDropDown optionsList={ data.types } selectedOptions={ types } selectorText="Type" onSubmit={ setTypes }/>
}


const mapStateToProps = state => ({
  types: state.filter.types
})

const mapDispatchToProps = dispatch => ({
  setTypes: types => dispatch(selectTypes(types)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter)

