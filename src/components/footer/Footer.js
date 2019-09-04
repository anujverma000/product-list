import React from 'react'
import styled from 'styled-components'

const Footer = () => 
  <Wrapper>
    Flaconi - https://www.flaconi.de - Order now at Flaconi online! - Franklinstrasse 13 , D-10587 Berlin
  </Wrapper>

const Wrapper = styled.footer`
  border-top: 1px solid #d5d5d5;
  color: #d5d5d5;
  padding: 24px;
  font-size: 14px;
  text-align: center;
  margin-top: 150px;
`
export default Footer