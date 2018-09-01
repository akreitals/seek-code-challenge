// @flow
import DiscountRuleAbstractFactory from './DiscountRuleAbstractFactory';
import AbstractDiscountRuleModel from './models/AbstractDiscountRuleModel';
import FixedDiscountRuleModel from './models/FixedDiscountDiscountRuleModel';
import XForYDiscountRuleModel from './models/XForYDiscountRuleModel';
import ProductModel from '../products/ProductModel';

describe('ProductJsonToProductTransformer', () => {
    const spy = {};

    beforeEach(() => {
        spy.console = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        spy.console.mockRestore();
    });

    test('should successfully load an array of models into the factory map', async () => {
        const discountRuleAbstractFactory = new DiscountRuleAbstractFactory([
            {
                name: 'FixedDiscountDiscountRuleModel',
                constructor: FixedDiscountRuleModel
            },
            {
                name: 'XForYDiscountRuleModel',
                constructor: XForYDiscountRuleModel
            }
        ]);

        const discountRule1 = discountRuleAbstractFactory.createInstance(
            'FixedDiscountDiscountRuleModel',
            {
                id: '1'
            }
        );

        const discountRule2 = discountRuleAbstractFactory.createInstance(
            'XForYDiscountRuleModel',
            {
                id: '2'
            }
        );

        expect(discountRule1).toBeInstanceOf(AbstractDiscountRuleModel);
        expect(discountRule1).toBeInstanceOf(FixedDiscountRuleModel);

        expect(discountRule2).toBeInstanceOf(AbstractDiscountRuleModel);
        expect(discountRule2).toBeInstanceOf(XForYDiscountRuleModel);
    });

    test('should warn the user if trying to add the same constructor to the factory map', async () => {
        const discountRuleAbstractFactory = new DiscountRuleAbstractFactory([
            {
                name: 'FixedDiscountDiscountRuleModel',
                constructor: FixedDiscountRuleModel
            },
            {
                name: 'FixedDiscountDiscountRuleModel',
                constructor: FixedDiscountRuleModel
            }
        ]);

        expect(console.warn).toHaveBeenCalled();
        expect(spy.console.mock.calls[0][0]).toContain(
            'Cannot register FixedDiscountDiscountRuleModel'
        );
    });

    test('should warn the user if trying to add an invalid constructor type to the factory map', async () => {
        const discountRuleAbstractFactory = new DiscountRuleAbstractFactory([
            {
                name: 'NotADiscountRule',
                constructor: ProductModel
            }
        ]);

        expect(console.warn).toHaveBeenCalled();
        expect(spy.console.mock.calls[0][0]).toContain(
            'Cannot register NotADiscountRule to DiscountRuleAbstractFactory'
        );
    });

    test('should throw an error if the model is not in the factory map', async () => {
        const discountRuleAbstractFactory = new DiscountRuleAbstractFactory([
            {
                name: 'FixedDiscountDiscountRuleModel',
                constructor: FixedDiscountRuleModel
            }
        ]);

        discountRuleAbstractFactory.createInstance('XForYDiscountRuleModel', {
            id: '1'
        });

        expect(console.warn).toHaveBeenCalled();
        expect(spy.console.mock.calls[0][0]).toContain(
            'Cannot create XForYDiscountRuleModel'
        );
    });
});
