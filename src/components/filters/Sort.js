import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { selectSort } from '../../actions/filter'
import { resetPagination } from '../../actions/pagination'

const Sort = ({ selectedSortOrder = '', setSortOrder, resetPagination }) => {

  const [selectedOption, setSelectedOption] = useState(selectedSortOrder);

  const SORT_OPTIONS = [
    {key: "name_asc",  name: "Name A-Z" },
    {key: "name_desc",  name: "Name Z-A" },
    {key: "price_asc",  name: "Price Lowest" },
    {key: "price_desc",  name: "Price Highest" },
  ]

  const onSortchange = order => {
    setSelectedOption(order)
    if(order){
      setSortOrder(order)
      resetPagination()
    }
  }

  return <Select value={selectedOption} onChange={e => onSortchange(e.target.value)}>
          <option value=''>Select</option>
          { SORT_OPTIONS.map(sort => 
              <option key={sort.key} value={sort.key}>
                {sort.name}
              </option>
          )}
        </Select>
}

const Select = styled.select`
  -webkit-appearance: none;
  border: none;
  padding: 4px;
  background: none;
`
const mapStateToProps = state => ({
  selectedSortOrder: state.filter.sort
})

const mapDispatchToProps = dispatch => ({
  setSortOrder: order => dispatch(selectSort(order)),
  resetPagination: () => dispatch(resetPagination())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
