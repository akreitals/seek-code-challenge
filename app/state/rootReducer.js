// @flow
import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
import session from './session';

const rootReducer = combineReducers({
    cart,
    products,
    session
});

export default rootReducer;
