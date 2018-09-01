export default {
    customer: {
        routes: {
            list: {
                controller: 'customerController',
                action: 'index',
                method: ['get'],
                route: '/customers/:customerId'
            }
        }
    }
};
