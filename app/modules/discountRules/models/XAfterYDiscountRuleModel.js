// @flow
import AbstractDiscountRuleModel from './AbstractDiscountRuleModel';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';
import type { Cart } from '../../checkout/Checkout';

export default class XAfterYDiscountRuleModel extends AbstractDiscountRuleModel {
    triggerMultiple: number | null;

    discountedPrice: number | null;

    constructor(source: DiscountRuleApiResponse) {
        super(source);

        this.triggerMultiple = source.triggerMultiple;
        this.discountedPrice = source.discountedPrice;
    }

    applyDiscount(cart: Cart): void {
        const cartItem = cart[this.productId];

        if (cartItem) {
            let newTotal;

            if (cartItem.quantity >= this.triggerMultiple) {
                newTotal = cartItem.quantity * this.discountedPrice;
            } else {
                newTotal = cartItem.quantity * cartItem.originalPricePerItem;
            }

            cartItem.setTotalPrice(newTotal);
        }
    }
}
