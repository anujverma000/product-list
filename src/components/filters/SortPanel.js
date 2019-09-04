import React from 'react'
import styled from 'styled-components'
import Sort from './Sort'
import CaretDown from '../../styled-guide/CaretUp';


const SortPanel = () => 
  <Root>
    <Label>Sort by:</Label> 
    <Sort/><CaretDown/>
  </Root>

const Root = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Label = styled.div`
  padding-right: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  color: #4c4c4c;
`
export default SortPanel