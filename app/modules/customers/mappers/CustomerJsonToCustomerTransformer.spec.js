// @flow
import CustomerJsonToCustomerTransformer from './CustomerJsonToCustomerTransformer';
import CustomerModel from '../CustomerModel';
import DiscountRuleJsonToDiscountRuleTransformer from '../../discountRules/mappers/DiscountRuleJsonToDiscountRuleTransformer';

jest.mock(
    '../../discountRules/mappers/DiscountRuleJsonToDiscountRuleTransformer'
);

describe('CustomerJsonToCustomerTransformer', () => {
    const mockCustomerData = {
        id: '1',
        name: 'Henry Fjord',
        company: 'Ford',
        email: 'modelh@ford.com',
        discountRules: [
            {
                id: '1',
                productId: '1',
                type: 'XforY',
                triggerMultiple: 3,
                discountMultiple: 2,
                discountedPrice: 99
            }
        ]
    };
    let discountRuleJsonToDiscountRuleTransformer;
    let mockDiscountRuleJsonToDiscountRuleTransformer;
    let mockDiscountRuleJsonToDiscountRuleTransformerConvert;

    beforeEach(() => {
        (DiscountRuleJsonToDiscountRuleTransformer: any).mockClear();
        discountRuleJsonToDiscountRuleTransformer = new DiscountRuleJsonToDiscountRuleTransformer();

        mockDiscountRuleJsonToDiscountRuleTransformer = (DiscountRuleJsonToDiscountRuleTransformer: any).mock.instances[0];
        mockDiscountRuleJsonToDiscountRuleTransformerConvert = mockDiscountRuleJsonToDiscountRuleTransformer.convertMultiple;
    });

    test('should successfully map a single CustomerApiResponse data to a single company model', async () => {
        const companyDataToCustomerTransformer = new CustomerJsonToCustomerTransformer(
            discountRuleJsonToDiscountRuleTransformer
        );

        const company = companyDataToCustomerTransformer.convertSingle(
            mockCustomerData
        );

        expect(company).not.toBeUndefined();
        expect(company).toBeInstanceOf(CustomerModel);
        expect(company.id).toEqual('1');
        expect(company.name).toEqual('Henry Fjord');
        expect(company.company).toEqual('Ford');
        expect(company.email).toEqual('modelh@ford.com');
        expect(
            mockDiscountRuleJsonToDiscountRuleTransformerConvert.mock.calls).toHaveLength(1);
        expect(
            mockDiscountRuleJsonToDiscountRuleTransformerConvert.mock.calls[0][0]
        ).toEqual(mockCustomerData.discountRules);
    });
});
