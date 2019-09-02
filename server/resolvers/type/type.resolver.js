const TypeRepository = require('./type-repository');
const typeRepository = new TypeRepository();

module.exports = {
    types: (args) => {
        let types = typeRepository.findAll();
        if(args.query){
            types = types.filter(type => args.query === type.name)
        }
        return types
    }
}