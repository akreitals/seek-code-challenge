// @flow
import DiscountRuleAbstractFactory from './DiscountRuleAbstractFactory';
import FixedDiscountDiscountRuleModel from './models/FixedDiscountDiscountRuleModel';
import XForYDiscountRuleModel from './models/XForYDiscountRuleModel';
import XAfterYDiscountRuleModel from './models/XAfterYDiscountRuleModel';

const discountRuleAbstractFactory = new DiscountRuleAbstractFactory([
    {
        name: 'FixedDiscount',
        constructor: FixedDiscountDiscountRuleModel
    },
    {
        name: 'XForY',
        constructor: XForYDiscountRuleModel
    },
    {
        name: 'XAfterY',
        constructor: XAfterYDiscountRuleModel
    }
]);

export { discountRuleAbstractFactory };
