// @flow
import DiscountRuleJsonToDiscountRuleTransformer from './DiscountRuleJsonToDiscountRuleTransformer';
import AbstractDiscountRuleModel from '../models/AbstractDiscountRuleModel';
import XForYDiscountRuleModel from '../models/XForYDiscountRuleModel';
import FixedDiscountDiscountRuleModel from '../models/FixedDiscountDiscountRuleModel';
import DiscountRuleAbstractFactory from '../DiscountRuleAbstractFactory';

jest.mock('../DiscountRuleAbstractFactory');

describe('DiscountRuleJsonToDiscountRuleTransformer', () => {
    const mockDiscountRuleData = {
        id: '1',
        productId: '1',
        type: 'XForY',
        triggerMultiple: 3,
        discountMultiple: 2,
        discountedPrice: 99
    };

    let discountRuleAbstractFactory;
    let mockDiscountRuleAbstractFactory;
    let mockDiscountRuleAbstractFactoryCreateInstance;

    beforeEach(() => {
        (DiscountRuleAbstractFactory: any).mockClear();
        discountRuleAbstractFactory = new DiscountRuleAbstractFactory();

        mockDiscountRuleAbstractFactory = (DiscountRuleAbstractFactory: any)
            .mock.instances[0];
        mockDiscountRuleAbstractFactoryCreateInstance =
            mockDiscountRuleAbstractFactory.createInstance;
    });

    test('should successfully map a single DiscountRuleApiResponse data to a single AbstractDiscountRule model', async () => {
        const discountRuleDataToDiscountRuleTransformer = new DiscountRuleJsonToDiscountRuleTransformer(
            discountRuleAbstractFactory
        );

        mockDiscountRuleAbstractFactoryCreateInstance.mockReturnValueOnce(
            new XForYDiscountRuleModel(mockDiscountRuleData)
        );

        const discountRule = discountRuleDataToDiscountRuleTransformer.convertSingle(
            mockDiscountRuleData
        );

        expect(
            mockDiscountRuleAbstractFactoryCreateInstance.mock.calls
        ).toHaveLength(1);

        expect(discountRule).not.toBeUndefined();
        expect(discountRule).toBeInstanceOf(AbstractDiscountRuleModel);
        expect(discountRule).toBeInstanceOf(XForYDiscountRuleModel);
        expect(discountRule.id).toEqual('1');
        expect(discountRule.productId).toEqual('1');
        expect(discountRule.triggerMultiple).toEqual(3);
        expect(discountRule.discountMultiple).toEqual(2);
    });

    test('should successfully map multiple DiscountRuleApiResponse data to AbstractDiscountRule models', async () => {
        const mockDiscountRuleData2 = Object.assign({}, mockDiscountRuleData, {
            type: 'FixedDiscount'
        });

        const discountRuleDataToDiscountRuleTransformer = new DiscountRuleJsonToDiscountRuleTransformer(
            discountRuleAbstractFactory
        );

        mockDiscountRuleAbstractFactoryCreateInstance
            .mockReturnValueOnce(
                new XForYDiscountRuleModel(mockDiscountRuleData)
            )
            .mockReturnValueOnce(
                new FixedDiscountDiscountRuleModel(mockDiscountRuleData2)
            );

        const discountRules = discountRuleDataToDiscountRuleTransformer.convertMultiple(
            [mockDiscountRuleData, mockDiscountRuleData2]
        );

        expect(
            mockDiscountRuleAbstractFactoryCreateInstance.mock.calls
        ).toHaveLength(2);

        expect(discountRules).toHaveLength(2);

        const discountRule1 = discountRules[0];
        expect(discountRule1).not.toBeUndefined();
        expect(discountRule1).toBeInstanceOf(AbstractDiscountRuleModel);
        expect(discountRule1).toBeInstanceOf(XForYDiscountRuleModel);
        expect(discountRule1.id).toEqual('1');
        expect(discountRule1.productId).toEqual('1');
        expect(discountRule1.triggerMultiple).toEqual(3);
        expect(discountRule1.discountMultiple).toEqual(2);
        expect(discountRule1.discountedPrice).toBeUndefined();

        const discountRule2 = discountRules[1];
        expect(discountRule2).not.toBeUndefined();
        expect(discountRule2).toBeInstanceOf(AbstractDiscountRuleModel);
        expect(discountRule2).toBeInstanceOf(FixedDiscountDiscountRuleModel);
        expect(discountRule2.id).toEqual('1');
        expect(discountRule2.productId).toEqual('1');
        expect(discountRule2.triggerMultiple).toBeUndefined();
        expect(discountRule2.discountMultiple).toBeUndefined();
        expect(discountRule2.discountedPrice).toEqual(99);

        expect(
            mockDiscountRuleAbstractFactoryCreateInstance.mock.calls
        ).toHaveLength(2);
    });
});
