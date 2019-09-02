const { DEFAULT_PAGE_SIZE }  = require('../../constants')
const ProductRepository = require('./product-repository');
const productRepository = new ProductRepository();

module.exports = {
    products: (args) => {
        let products = productRepository.findAll();
        if(args.query){
            products = products.filter(p => p.name.indexOf(args.query) >= 0)
        }
        
        if(args.brand){
            products = products.filter(p => p.brand === args.brand)
        }

        if(args.type){
            products = products.filter(p => p.type === args.type)
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
        
        if(args.offset ||  args.limit){
            let offset  = args.offset || 0;
            let limit =  args.limit || DEFAULT_PAGE_SIZE
            products =  products.slice(offset, offset + limit);
        }
        return products;
    }
}