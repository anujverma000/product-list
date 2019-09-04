import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { resetFilters } from '../../actions/filter'
import Button from '../../styled-guide/Button'

const LoadMore = ({ currentPage, resetFilters }) => (
  <Wrapper>
    <Button onClick={resetFilters}>
     Load More
    </Button>
  </Wrapper>
);


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
`
const mapDispatchToProps = dispatch => ({
  resetFilters: () => dispatch(resetFilters())
});

export default connect( null, mapDispatchToProps )(LoadMore);
