const ProductModel = require('../models/product')

const transformer = product => ({

    type: 'products',
    id: product.id,
    atributes: {
        name: product.name,
        price: product.price,
    },
    links: {
        self: `/api/v1/products/${product.id}`
    }

})

const getAll = async (request, h) => {

    const products = await ProductModel.find({})//entre a chaves pode procurar por atributos como id

    return { data: products.map(transformer) }//cada item com o transformer

}

const save = async (request, h) => {
    const { name, price } = request.payload

    const product = new ProductModel

    product.name = name
    product.price = price

    await product.save()//salva no DB



    return h.response(transformer(product)).code(201)
}

const remove = async (request, h) => {
    await Product.findOneAndDelete({ _id: request.params.id })
    return h.response().code(204)
}

const find = async (request, h) => {
    const product = await ProductModel.findById(request.params.id)
    return { data: transformer(product) }
}

module.exports = {
    getAll,
    save,
    remove,
    find
}