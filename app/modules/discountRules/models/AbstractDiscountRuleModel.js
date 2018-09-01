// @flow
import type { DiscountRuleInterface } from './DiscountRuleInterface';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';
import type { Cart } from '../../checkout/Checkout';

export default class DiscountRuleModel implements DiscountRuleInterface {
    id: string;

    productId: string;

    displayName: string;

    constructor(source: DiscountRuleApiResponse) {
        this.id = source.id;
        this.productId = source.productId;
        this.displayName = source.displayName;
    }

    applyDiscount(cart: Cart): void {
        throw new Error(`applyDiscount(cart) not implemented: ${cart}`);
    }
}
