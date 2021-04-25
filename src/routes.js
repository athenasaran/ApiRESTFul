const productController = require('./controller/product')
module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productController.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productController.find
    },

    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productController.save
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productController.remove
    }
]