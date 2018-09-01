// @flow
import { axiosJsonApiDao } from '../../utils/api/daos/AxiosJsonApiDaoFactory';
import { productJsonToProductTransformer } from '../mappers/ProductJsonToProductTransformerFactory';
import ProductRepository from './ProductRepository';

const productRepository: ProductRepository = new ProductRepository(
    axiosJsonApiDao,
    productJsonToProductTransformer
);

export { productRepository };
