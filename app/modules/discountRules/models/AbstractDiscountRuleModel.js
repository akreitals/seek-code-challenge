// @flow
import type { DiscountRuleInterface } from './DiscountRuleInterface';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';

export default class DiscountRuleModel implements DiscountRuleInterface {
    id: string;

    productId: string;

    displayName: string;

    constructor(source: DiscountRuleApiResponse) {
        this.id = source.id;
        this.productId = source.productId;
        this.displayName = source.displayName;
    }

    getId() {
        return `This id is: ${this.id}`;
    }
}
