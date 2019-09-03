import React, { PureComponent } from 'react'
import styled from 'styled-components'

export class Product extends PureComponent {
  render() {
    const { image, brand, name, type, price, size } = this.props
    return (
      <Root>
        <ProductPhoto src={ image } loading="lazy" alt={ name }/>
        <ProductBrand>{ brand }</ProductBrand>
        <ProductName>{ name }</ProductName>
        <ProductType>{ type }</ProductType>
        <ProductPrice>{ price }</ProductPrice> / <ProductSize>{ size }</ProductSize>
      </Root>
    )
  }
}

/** 
 * 
 * STYLES
*/
const Root = styled.div`
  width: 180px;
  height: 320px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 12px 16px;
  &:hover{
    border: solid 1px #d5d5d5;
    cursor: pointer;
  }
`

const ProductPhoto = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 172px;
  vertical-align: middle;
  margin: 0 auto 10px;
  display: block;
`
const ProductHeading = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

const ProductBrand = styled(ProductHeading)``
const ProductName = styled(ProductHeading)``
const ProductType = styled(ProductHeading)``

const ProductPrice = styled.span``
const ProductSize = styled.span``


export default Product