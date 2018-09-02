import { combineReducers } from 'redux';
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
    [types.FETCH_LIST]: state => ({
        ...state,
        loading: true
    }),
    [types.FETCH_LIST_COMPLETED]: (state, action) => {
        const { products } = action.payload;
        console.log(action);
        return {
            ...state,
            loading: false,
            products
        };
    },
    [types.FETCH_LIST_FAILED]: (state, action) => ({
        ...state,
        loading: false,
        error: action.error
    })
});

export default listReducer;
