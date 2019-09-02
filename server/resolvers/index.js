const products = require('./product/product.resolver')
const types = require('./type/type.resolver')
const brands = require('./brand/brand.resolver')

module.exports = {
  ...products,
  ...types,
  ...brands
}