import React from 'react'
import styled from 'styled-components'
import { MOBILE } from '../../styled-guide/device'
import BrandFilter from './BrandFilter'
import TypeFilter from './TypeFilter'


const FilterPanel = () => 
  <Root>
    <BrandFilter/>
    <TypeFilter/>
  </Root>

const Root = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  
  @media ${ MOBILE } {
    flex-direction: row;
  }
`
export default FilterPanel