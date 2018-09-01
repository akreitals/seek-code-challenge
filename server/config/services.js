import productsServices from '../modules/products/services';
import customersServices from '../modules/customers/services';

export default {
    ...productsServices,
    ...customersServices
};
