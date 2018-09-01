// @flow
import type { DiscountRuleInterface } from './models/DiscountRuleInterface';
import AbstractDiscountRuleModel from './models/AbstractDiscountRuleModel';

export type DiscountRuleAbstractFactoryValue = {
    name: string,
    constructor: DiscountRuleInterface
};

export default class DiscountRuleAbstractFactory {
    constructor(models: ?Array<DiscountRuleAbstractFactoryValue>) {
        this._registeredTypes = new Map();

        models.forEach(model => {
            this.register(model.name, model.constructor);
        });
    }

    register(modelName, model) {
        if (
            !this._registeredTypes.has(modelName) &&
            model.prototype instanceof AbstractDiscountRuleModel
        ) {
            this._registeredTypes.set(modelName, model);
        } else {
            console.warn(
                `Cannot register ${modelName} to DiscountRuleAbstractFactory`
            );
        }
    }

    createInstance(
        modelName: string,
        ...options: any
    ): AbstractDiscountRuleModel {
        if (!this._registeredTypes.has(modelName)) {
            return console.warn(
                `Cannot create ${modelName} as it does not exist in the DiscountRuleAbstractFactory`
            );
        }

        const Model = this._registeredTypes.get(modelName);
        return new Model(...options);
    }
}
