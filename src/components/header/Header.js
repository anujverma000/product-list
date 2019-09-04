import React from 'react'
import styled from 'styled-components'
import { MOBILE } from '../../styled-guide/device'

const Header = () => 
  <Wrapper>
    <PreHeader>
      <HeaderText>GRATIS VERSAND AB 19 €</HeaderText>
      <HeaderText>2 GRATISPROBEN</HeaderText>
      <HeaderText>ZERTIFIZIERTER HÄNDLER</HeaderText>
      <HeaderText>120 TAGE RÜCKGABERECHT</HeaderText>
    </PreHeader>
    <Logo src="https://cdn.flaconi.de/themes/flaconi/assets/20190903130026/images/svg/flaconi-logo.svg"></Logo>
  </Wrapper>


const Wrapper = styled.header`
  border-bottom: 2px solid #292929;
`

const PreHeader = styled.div`
  background-color: #f6f6f6;
  height: 30px; 
  display: none;
  padding: 0 16px;
  @media ${ MOBILE } {
    display: flex;
    justify-content: space-between;
  }
`
const HeaderText = styled.span`
  font-size: .6rem;
  line-height: 30px;
`

const Logo = styled.img`
  width: 187px;
  height: 36px;
  display: block;
  margin: 24px auto;
`

export default Header;