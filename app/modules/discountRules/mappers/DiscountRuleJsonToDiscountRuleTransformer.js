// @flow
import AbstractDataTransformer from '../../utils/mappers/AbstractDataTransformer';
import AbstractDiscountRuleModel from '../models/AbstractDiscountRuleModel';
import { DiscountRuleApiResponse } from '../DiscountRuleApiResponseType';
import { discountRuleAbstractFactory } from '../DiscountRuleAbstractFactoryFactory';

export default class VoteDataToVoteTransformer extends AbstractDataTransformer {
    convertSingle(source: DiscountRuleApiResponse): AbstractDiscountRuleModel {
        return discountRuleAbstractFactory.createInstance(source.type, source);
    }
}
