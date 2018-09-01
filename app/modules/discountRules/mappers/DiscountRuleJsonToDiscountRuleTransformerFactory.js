// @flow
import DiscountRuleJsonToDiscountRuleTransformer from './DiscountRuleJsonToDiscountRuleTransformer';
import { discountRuleAbstractFactory } from '../DiscountRuleAbstractFactoryFactory';

const discountRuleJsonToDiscountRuleTransformer = new DiscountRuleJsonToDiscountRuleTransformer(
    discountRuleAbstractFactory
);

export { discountRuleJsonToDiscountRuleTransformer };
