// @flow
import { DiscountRuleApiResponse } from './DiscountRuleApiResponseType';

export default class DiscountRuleModel {
    id: string;

    productId: string;

    type: 'XforY' | 'fixedDiscount' | 'XafterY';

    triggerMultiple: number | null;

    discountMultiple: number | null;

    discountedPrice: number | null;

    constructor(source: DiscountRuleApiResponse) {
        this.id = source.id;
        this.productId = source.productId;
        this.type = source.type;
        this.triggerMultiple = source.triggerMultiple;
        this.discountMultiple = source.discountMultiple;
        this.discountedPrice = source.discountedPrice;
    }
}
