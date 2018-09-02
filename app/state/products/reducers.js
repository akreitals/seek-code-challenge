import * as types from './types';
import { createReducer } from '../utils';

/* State shape
{
    products: [ product ],
    error:,
    loading
}
*/

const initialState = {
    products: [],
    loading: false,
    error: false
};

const listReducer = createReducer(initialState)({
    [types.FETCH_LIST_REQUEST]: state => ({
        ...state,
        loading: true
    }),
    [types.FETCH_LIST_SUCCESS]: (state, action) => {
        const { products } = action.payload;
        return {
            ...state,
            loading: false,
            products
        };
    },
    [types.FETCH_LIST_FAILURE]: (state, action) => ({
        ...state,
        loading: false,
        error: action.error
    })
});

export default listReducer;
