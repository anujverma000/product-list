import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { resetFilters } from '../../actions/filter'
import Button from '../../styled-guide/Button'

const NoResults = ({ resetFilters }) => (
  <Wrapper>
    <NoResultsMessage>
      Sorry! We couldn’t find anything here :(
    </NoResultsMessage>
    <Button onClick={resetFilters}>
      Reset Filters
    </Button>
  </Wrapper>
);


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`
const NoResultsMessage = styled.div`
  font-size: 16px;
  margin: 24px;
  font-weight: normal;
  text-align: center
`

const mapDispatchToProps = dispatch => ({
  resetFilters: () => dispatch(resetFilters())
});

export default connect( null, mapDispatchToProps )(NoResults);
