// @flow
import AbstractDiscountRuleModel from './AbstractDiscountRuleModel';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';
import type { Cart } from '../../checkout/Checkout';

export default class XForYDiscountRuleModel extends AbstractDiscountRuleModel {
    triggerMultiple: number | null;

    discountMultiple: number | null;

    constructor(source: DiscountRuleApiResponse) {
        super(source);

        this.triggerMultiple = source.triggerMultiple;
        this.discountMultiple = source.discountMultiple;
    }

    applyDiscount(cart: Cart): void {
        const cartItem = cart[this.productId];

        if (cartItem) {
            let newTotal;

            if (cartItem.quantity >= this.triggerMultiple) {
                const freeItems = Math.floor(
                    cartItem.quantity / this.triggerMultiple
                );
                newTotal =
                    (cartItem.quantity - freeItems) *
                    cartItem.originalPricePerItem;
            } else {
                newTotal = cartItem.quantity * cartItem.originalPricePerItem;
            }

            cartItem.setTotalPrice(newTotal);
        }
    }
}
