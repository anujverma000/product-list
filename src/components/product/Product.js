import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { MOBILE, TABLET } from '../../styled-guide/device'
import { LOCALE, CURRENCY } from '../../constants'
import Rating from './Rating';

export class Product extends PureComponent {
  render() {
    const { image, brand, name, type, price, size, rating } = this.props
    const formattedPrice = new Intl.NumberFormat(LOCALE, { style: 'currency', currency: CURRENCY }).format(price/100)
    return (
      <Root data-test='product-item'>
        <ProductPhoto intrinsicsize="215x251" src={ image } loading="lazy" alt={ name } width="186"/>
        <ProductBrand>{ brand }</ProductBrand>
        <ProductName>{ name }</ProductName>
        <ProductType>{ type }</ProductType>
        <ProductDetails>
          <ProductPrice>{ formattedPrice }</ProductPrice> / <ProductSize>{ size }</ProductSize>
        </ProductDetails>
        <Rating rating={rating}/>
      </Root>
    )
  }
}

/** 
 * 
 * STYLES
*/
const Root = styled.div`
  width: 26%;
  min-width: 186px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 16px;
  margin: 12px 24px;
  &:hover{
    outline: solid 1px #d5d5d5;
    cursor: pointer;
  }
  @media ${ MOBILE } {
    width: 100%;
    margin: 0;
  }
  @media ${ TABLET } {
    min-width: 49%;
    padding: 0;
    margin: 0;
  }
`

const ProductPhoto = styled.img`
  width: 100%;
  height: auto;
  min-height: 172px;
  margin: 0 auto 10px;
  display: block;
`
const ProductHeading = styled.h2`
  margin: 8px auto;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`

const ProductBrand = styled(ProductHeading)`
  margin-bottom: 4px;
`
const ProductName = styled(ProductHeading)`
  font-size: .8rem;
  font-weight: 400;
`
const ProductType = styled(ProductHeading)`
  color: #737373;
  margin: 12px 0;
  font-size: .8rem;
`

const ProductDetails = styled.div` 
  font-size: .7rem;
  text-align: center;
`
const ProductPrice = styled.span`
  line-height: 1.2;
`
const ProductSize = styled.span`
  line-height: 1.2;
`


export default Product