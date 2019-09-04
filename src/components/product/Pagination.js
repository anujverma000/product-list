import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { goNext, goPrev } from '../../actions/pagination'
import Button from '../../styled-guide/Button'

const Pagination = ({ currentPage, goNextPage, goPrevPage, totalPages }) => (
  <Wrapper>

    <Button onClick={ goPrevPage } disabled={ currentPage <= 1 }>Prev</Button>

    <PageCount> Page { currentPage } of { totalPages }</PageCount>
    
    <Button onClick={ goNextPage } disabled={ currentPage >= totalPages }>Next</Button>
  </Wrapper>
);


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`
const PageCount = styled.div`
  font-size: 16px
`

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage + 1
})

const mapDispatchToProps = dispatch => ({
  goNextPage: () => dispatch(goNext()),
  goPrevPage: () => dispatch(goPrev())
});

export default connect( mapStateToProps, mapDispatchToProps )(Pagination);
