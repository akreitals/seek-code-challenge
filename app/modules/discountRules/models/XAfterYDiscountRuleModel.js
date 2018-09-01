// @flow
import AbstractDiscountRuleModel from './AbstractDiscountRuleModel';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';

export default class XAfterYDiscountRuleModel extends AbstractDiscountRuleModel {
    triggerMultiple: number | null;

    discountedPrice: number | null;

    constructor(source: DiscountRuleApiResponse) {
        super(source);

        this.triggerMultiple = source.triggerMultiple;
        this.discountedPrice = source.discountedPrice;
    }
}
