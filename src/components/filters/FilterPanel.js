import React from 'react'
import styled from 'styled-components'
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
`
export default FilterPanel