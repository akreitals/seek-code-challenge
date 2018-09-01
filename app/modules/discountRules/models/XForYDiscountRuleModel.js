// @flow
import AbstractDiscountRuleModel from './AbstractDiscountRuleModel';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';

export default class XForYDiscountRuleModel extends AbstractDiscountRuleModel {
    triggerMultiple: number | null;

    discountMultiple: number | null;

    constructor(source: DiscountRuleApiResponse) {
        super(source);

        this.triggerMultiple = source.triggerMultiple;
        this.discountMultiple = source.discountMultiple;
    }
}
