// @flow
import FactoryInterface from '../../../server/lib/FactoryInterface';
import type AbstractDiscountRuleModel from '../discountRules/models/AbstractDiscountRuleModel';
import Checkout from './Checkout';

export default class CheckoutProvider implements FactoryInterface {
    createInstance(discountRules: Array<AbstractDiscountRuleModel>): Checkout {
        return new Checkout(discountRules);
    }
}
