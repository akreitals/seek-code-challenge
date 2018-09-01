// @flow
export type DiscountRuleApiResponse = {
    id: string,
    productId: string,
    displayName: string,
    type: 'XforY' | 'fixedDiscount' | 'XafterY',
    triggerMultiple: ?number,
    discountMultiple: ?number,
    discountedPrice: ?number
};
