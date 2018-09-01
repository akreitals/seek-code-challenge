// @flow
import AbstractDiscountRuleModel from './AbstractDiscountRuleModel';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';
import type { Cart } from '../../checkout/Checkout';

export default class FixedDiscountDiscountRuleModel extends AbstractDiscountRuleModel {
    discountedPrice: number;

    constructor(source: DiscountRuleApiResponse) {
        super(source);

        this.discountedPrice = source.discountedPrice;
    }

    applyDiscount(cart: Cart) {
        const cartItem = cart[this.productId];

        if (cartItem) {
            cartItem.setTotalPrice(cartItem.quantity * this.discountedPrice);
        }
    }
}
