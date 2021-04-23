const productController = require('./controller/product')
module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productController.getAll
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productController.save
    }
]