// @flow
import AbstractDataTransformer from '../../utils/mappers/AbstractDataTransformer';
import CustomerModel from '../CustomerModel';
import { CustomerApiResponse } from '../CustomerApiResponseType';
import type DiscountRuleJsonToDiscountRuleTransformer from '../../discountRules/mappers/DiscountRuleJsonToDiscountRuleTransformer';

export default class VoteDataToVoteTransformer extends AbstractDataTransformer {
    constructor(
        discountRuleJsonToDiscountRuleTransformer: DiscountRuleJsonToDiscountRuleTransformer
    ) {
        super();
        this._discountRuleJsonToDiscountRuleTransformer = discountRuleJsonToDiscountRuleTransformer;
    }

    convertSingle(source: CustomerApiResponse): CustomerModel {
        return new CustomerModel({
            id: source.id,
            name: source.name,
            company: source.company,
            email: source.email,
            discountRules: this._discountRuleJsonToDiscountRuleTransformer.convertMultiple(
                source.discountRules
            )
        });
    }
}
