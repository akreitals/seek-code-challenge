import * as types from './types';
import { createReducer } from '../utils';
import { checkoutProvider } from '../../modules/checkout/CheckoutProviderFactory';

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
    cartItems: [],
    total: 0
};

const cartReducer = createReducer(initialState)({
    [types.ADD_ITEM]: (state, action) => {
        const { product } = action.payload;

        const checkout = checkoutProvider.getCheckout();
        checkout.addItem(product);

        return {
            cartItems: checkout.getCartItems(),
            total: checkout.total()
        };
    },

    [types.REMOVE_ITEM]: (state, action) => {
        const { product } = action.payload;

        const checkout = checkoutProvider.getCheckout();
        checkout.removeItem(product);

        return {
            cartItems: checkout.getCartItems(),
            total: checkout.total()
        };
    },

    [types.CLEAR_CART]: () => initialState
});

export default cartReducer;
