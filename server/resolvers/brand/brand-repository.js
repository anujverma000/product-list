const productList = require('../../resources/productlist.json')

module.exports = class BrandRepository {
  findAll() {
      return [...new Set(productList.map(p => p.brand))].map(brand => ({ name: brand }))
  }
}