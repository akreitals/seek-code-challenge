// @flow
import FactoryInterface from '../../../server/lib/FactoryInterface';
import type AbstractDiscountRuleModel from '../discountRules/models/AbstractDiscountRuleModel';
import Checkout from './Checkout';

export default class CheckoutProvider implements FactoryInterface {
    constructor() {
        this._checkout = null;
    }

    /**
     * @inheritDoc
     */
    createInstance(discountRules: Array<AbstractDiscountRuleModel>): Checkout {
        if (!this._checkout) {
            this._checkout = new Checkout(discountRules);
        }
        return this._checkout;
    }

    /**
     * Get the current checkout
     * @returns {null|Checkout}
     */
    getCheckout(): Checkout {
        return this._checkout;
    }

    /**
     * Destroy current checkout
     */
    destroyCheckout(): void {
        this._checkout = null;
    }
}
