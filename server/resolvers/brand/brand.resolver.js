const BrandRepository = require('./brand-repository')
const brandRepository = new BrandRepository()

module.exports = {
    brands: (args) => {
        let brands = brandRepository.findAll()
        if(args.query){
            brands = brands.filter(brand => args.query === brand.name)
        }
        return brands
    }
}