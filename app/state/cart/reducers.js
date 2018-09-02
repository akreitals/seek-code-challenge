import * as types from './types';
import { createReducer } from '../utils';
import { checkoutProvider } from '../../modules/checkout/CheckoutProviderFactory';

let checkout;

/* State shape
{
    cartItems: [
        {
            product,
            quantity,
        }
    ],
    total:
}
*/

const initialState = {
    cartItems: []
};

const cartReducer = createReducer(initialState)({
    [types.CREATE_CART]: (state, action) => {
        const { discountRules } = action.payload;
        checkout = checkoutProvider.createInstance(discountRules);
        return state;
    },

    [types.ADD_ITEM]: (state, action) => {
        const { product } = action.payload;

        checkout.addItem(product);

        return {
            cartItems: checkout.getCartItems(),
            total: checkout.total()
        };
    },

    [types.REMOVE_ITEM]: (state, action) => {
        const { product } = action.payload;

        checkout.removeItem(product);

        return {
            cartItems: checkout.getCartItems(),
            total: checkout.total()
        };
    }
});

export default cartReducer;
