// @flow
import type { Cart } from '../../checkout/Checkout';

export interface DiscountRuleInterface {
    id: string;

    productId: string;

    displayName: string;

    /**
     * Apply discount rule to cartItems in cart
     * @param {Cart} cart
     */
    applyDiscount(cart: Cart): void;
}
