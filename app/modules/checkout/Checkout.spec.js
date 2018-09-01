// @flow
import Checkout from './Checkout';
import ProductModel from '../products/ProductModel';
import XForYDiscountRuleModel from '../discountRules/models/XForYDiscountRuleModel';
import FixedDiscountDiscountRuleModel from '../discountRules/models/FixedDiscountDiscountRuleModel';
import XAfterYDiscountRuleModel from '../discountRules/models/XAfterYDiscountRuleModel';

const products = [
    new ProductModel({
        id: 1,
        price: 26999
    }),
    new ProductModel({
        id: 2,
        price: 32299
    }),
    new ProductModel({
        id: 3,
        price: 39499
    })
];

const discountRules = [
    new FixedDiscountDiscountRuleModel({
        id: '2',
        productId: '2',
        displayName: 'On sale',
        type: 'FixedDiscount',
        discountedPrice: 30999
    }),
    new XForYDiscountRuleModel({
        id: '1',
        productId: '1',
        type: 'XForY',
        triggerMultiple: 5,
        discountMultiple: 4
    }),
    new XAfterYDiscountRuleModel({
        id: '3',
        productId: '3',
        type: 'XAfterY',
        triggerMultiple: 3,
        discountedPrice: 38999
    })
];

describe('DiscountRuleJsonToDiscountRuleTransformer', () => {
    test('should add items to the cart and recalculate total', () => {
        const checkout = new Checkout();

        checkout.addItem(products[0]);
        expect(checkout.total()).toEqual(products[0].price);

        checkout.addItem(products[0]);
        expect(checkout.total()).toBe(2 * products[0].price);

        checkout.addItem(products[1]);
        expect(checkout.total()).toBe(
            2 * products[0].price + products[1].price
        );

        checkout.addItem(products[1]);
        expect(checkout.total()).toBe(
            2 * products[0].price + 2 * products[1].price
        );
    });

    test('should remove items to the cart and recalculate total', () => {
        const checkout = new Checkout();

        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[1]);
        expect(checkout.total()).toBe(
            2 * products[0].price + products[1].price
        );

        checkout.removeItem(products[0]);
        expect(checkout.total()).toBe(products[0].price + products[1].price);
    });

    test('should apply FixedDiscount to the cart and recalculate total', () => {
        const checkout = new Checkout([discountRules[0]]);

        checkout.addItem(products[0]);
        checkout.addItem(products[1]);
        checkout.addItem(products[1]);
        expect(checkout.total()).toBe(
            2 * discountRules[0].discountedPrice + products[0].price
        );
    });

    test('should apply XForY discount rule to the cart and recalculate total', () => {
        const checkout = new Checkout([discountRules[1]]);

        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        expect(checkout.total()).toBe(4 * products[0].price);

        checkout.removeItem(products[0]);
        expect(checkout.total()).toBe(4 * products[0].price);

        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        expect(checkout.total()).toBe(8 * products[0].price);

        checkout.addItem(products[0]);
        expect(checkout.total()).toBe(8 * products[0].price);
    });

    test('should apply XAfterY discount rule to the cart and recalculate total', () => {
        const checkout = new Checkout([discountRules[2]]);

        checkout.addItem(products[2]);
        checkout.addItem(products[2]);
        expect(checkout.total()).toBe(2 * products[2].price);

        checkout.addItem(products[2]);
        expect(checkout.total()).not.toBe(3 * products[2].price);

        expect(checkout.total()).toBe(3 * discountRules[2].discountedPrice);
    });

    test('should apply multiple discount rules to the same cart and recalculate total', () => {
        const checkout = new Checkout(discountRules);

        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[1]);
        checkout.addItem(products[1]);
        checkout.addItem(products[2]);
        checkout.addItem(products[2]);
        checkout.addItem(products[2]);
        expect(checkout.total()).toBe(
            4 * products[0].price +
                2 * discountRules[0].discountedPrice +
                3 * discountRules[2].discountedPrice
        );
    });
});
