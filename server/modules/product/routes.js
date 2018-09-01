export default {
    product: {
        routes: {
            list: {
                controller: 'productController',
                action: 'index',
                method: ['get'],
                route: '/products'
            }
        }
    }
};
