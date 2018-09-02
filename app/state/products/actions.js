import * as types from './types';
import { productRepository } from '../../modules/products/repository/ProductRepositoryFactory';

export const fetchList = () => {
    const request = () => ({ type: types.FETCH_LIST_REQUEST });
    const success = (products) => ({type: types.FETCH_LIST_SUCCESS, payload: { products }});
    const failure = (error) => ({type: types.FETCH_LIST_FAILURE, payload: { error }});

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
