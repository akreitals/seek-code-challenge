// @flow
import AbstractDataTransformer from '../../utils/mappers/AbstractDataTransformer';
import AbstractDiscountRuleModel from '../models/AbstractDiscountRuleModel';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';
import type DiscountRuleAbstractFactory from '../DiscountRuleAbstractFactory';

export default class VoteDataToVoteTransformer extends AbstractDataTransformer {
    constructor(discountRuleAbstractFactory: DiscountRuleAbstractFactory) {
        super();
        this._discountRuleAbstractFactory = discountRuleAbstractFactory;
    }

    convertSingle(source: DiscountRuleApiResponse): AbstractDiscountRuleModel {
        return this._discountRuleAbstractFactory.createInstance(
            source.type,
            source
        );
    }
}
