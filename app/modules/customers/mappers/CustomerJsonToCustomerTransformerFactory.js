// @flow
import CustomerJsonToCustomerTransformer from './CustomerJsonToCustomerTransformer';
import { discountRuleJsonToDiscountRuleTransformer } from '../../discountRules/mappers/DiscountRuleJsonToDiscountRuleTransformerFactory';

const customerJsonToCustomerTransformer = new CustomerJsonToCustomerTransformer(
    discountRuleJsonToDiscountRuleTransformer
);

export { customerJsonToCustomerTransformer };
