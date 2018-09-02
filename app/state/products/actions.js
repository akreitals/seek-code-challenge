import * as types from './types';
import { productRepository } from '../../modules/products/repository/ProductRepositoryFactory';

export const fetchList = () => {
    function request() {
        return { type: types.FETCH_LIST };
    }
    function success(products) {
        return { type: types.FETCH_LIST_COMPLETED, payload: { products } };
    }
    function failure(error) {
        return { type: types.FETCH_LIST_FAILED, payload: { error } };
    }

    return async dispatch => {
        dispatch(request());

        try {
            const products = await productRepository.getAll();
            dispatch(success(products));
        } catch (error) {
            dispatch(failure(error));
        }
    };
};
