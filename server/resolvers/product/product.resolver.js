const { DEFAULT_PAGE_SIZE }  = require('../../constants')
const ProductRepository = require('./product-repository')
const productRepository = new ProductRepository()

const isArrayNotEmpty = arr => arr && arr.length

module.exports = {
    products: (args) => {
        let products = productRepository.findAll()
        if(args.query){
            products = products.filter(p => p.name.indexOf(args.query) >= 0)
        }
        
        if(isArrayNotEmpty(args.brands)){
            products = products.filter(p => args.brands.includes(p.brand))
        }

        if(isArrayNotEmpty(args.types)){
            products = products.filter(p => args.types.includes(p.type))
        }

        if(args.sort === "name_asc"){
            products = products.sort((a, b) => a.name < b.name? -1: 1)
        }

        if(args.sort === "name_desc"){
            products = products.sort((a, b) => a.name > b.name? -1: 1)
        }

        if(args.sort === "price_asc"){
            products = products.sort((a, b) => a.price < b.price? -1: 1)
        }

        if(args.sort === "price_desc"){
            products = products.sort((a, b) => a.price > b.price? -1: 1)
        }
        const offset  = args.offset || 0
        const limit =  args.limit || DEFAULT_PAGE_SIZE

        const total = products.length;
        const hasMore = offset + limit < total;

        if(args.offset ||  args.limit){
            products =  products.slice(offset, offset + limit)
        }
        return {
            products,
            total,
            hasMore
        }
    }
}