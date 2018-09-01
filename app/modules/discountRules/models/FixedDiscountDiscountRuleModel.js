// @flow
import AbstractDiscountRuleModel from './AbstractDiscountRuleModel';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';

export default class FixedDiscountDiscountRuleModel extends AbstractDiscountRuleModel {
    discountedPrice: number;

    constructor(source: DiscountRuleApiResponse) {
        super(source);

        this.discountedPrice = source.discountedPrice;
    }
}
