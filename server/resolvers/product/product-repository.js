const products = require('../../resources/productlist.json')

module.exports = class ProductRepository {
  findAll() {
      return products
  }
}