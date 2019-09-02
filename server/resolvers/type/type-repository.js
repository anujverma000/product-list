const productList = require('../../resources/productlist.json')

module.exports = class TypeRepository {
  findAll() {
      return [...new Set(productList.map(p => p.type))].map(type => ({ name: type }))
  }
}