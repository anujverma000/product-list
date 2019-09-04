import React from 'react'
import styled from 'styled-components'
import DrawIcon from './DrawIcon'

const CaretDown = () => 
  <DrawIcon>
    <PointerDown/>
  </DrawIcon>

const PointerDown = styled.span`
  border-color: #292929;
  border-image: none;
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 6px;
  width: 6px;
  display: inline-block;
  transform: rotate(135deg);
`

export default CaretDown;