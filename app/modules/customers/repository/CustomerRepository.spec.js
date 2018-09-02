// @flow
import CustomerRepository from './CustomerRepository';
import CustomerJsonToCustomerTransformer from '../mappers/CustomerJsonToCustomerTransformer';
import AxiosJsonApiDao from '../../utils/api/daos/AxiosJsonApiDao';
import ApiResponseDto from '../../utils/api/dtos/ApiResponseDto';
import CustomerModel from '../CustomerModel';
import GetApiRequestDto from '../../utils/api/dtos/GetApiRequestDto';

jest.mock('../../utils/api/daos/AxiosJsonApiDao');
jest.mock('../mappers/CustomerJsonToCustomerTransformer');

const CUSTOMER_ID = '1';

describe('CustomerRepository', () => {
    let mockCustomer;
    let axiosJsonApiDao;
    let productJsonToCustomerTransformer;
    let mockCustomerJsonToCustomerTransformer;
    let mockCustomerJsonToCustomerTransformerConvertSingle;

    beforeEach(() => {
        axiosJsonApiDao = new AxiosJsonApiDao('', null, null);
        productJsonToCustomerTransformer = new CustomerJsonToCustomerTransformer();

        mockCustomerJsonToCustomerTransformer =
            CustomerJsonToCustomerTransformer.mock.instances[0];
        mockCustomerJsonToCustomerTransformerConvertSingle =
            mockCustomerJsonToCustomerTransformer.convertSingle;

        mockCustomer = new CustomerModel({ id: 1 });
    });

    test('should successfully get a list of customers', async () => {
        const data = {
            data: [
                {
                    id: CUSTOMER_ID
                }
            ]
        };
        const apiResponseDto = new ApiResponseDto(data);

        axiosJsonApiDao.get.mockResolvedValue(apiResponseDto);

        mockCustomerJsonToCustomerTransformerConvertSingle.mockReturnValueOnce(
            mockCustomer
        );

        const productRepository = new CustomerRepository(
            axiosJsonApiDao,
            productJsonToCustomerTransformer
        );

        const customer = await productRepository.findById(CUSTOMER_ID);
        expect(customer).not.toBeUndefined();
        expect(customer).toBe(mockCustomer);

        expect(
            mockCustomerJsonToCustomerTransformerConvertSingle.mock.calls[0][0]
        ).toEqual(data);

        expect(axiosJsonApiDao.get.mock.calls[0][0]).toBeInstanceOf(
            GetApiRequestDto
        );
    });
});
