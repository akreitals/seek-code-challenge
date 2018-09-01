// @flow
import ProductRepository from './ProductRepository';
import ProductJsonToProductTransformer from '../mappers/ProductJsonToProductTransformer';
import AxiosJsonApiDao from '../../utils/api/daos/AxiosJsonApiDao';
import ApiResponseDto from '../../utils/api/dtos/ApiResponseDto';
import ProductModel from '../ProductModel';
import ListApiRequestDto from '../../utils/api/dtos/ListApiRequestDto';

jest.mock('../../utils/api/daos/AxiosJsonApiDao');
jest.mock('../mappers/ProductJsonToProductTransformer');

describe('ProductRepository', () => {
    let mockProduct1;
    let mockProduct2;
    let axiosJsonApiDao;
    let productJsonToProductTransformer;
    let mockProductJsonToProductTransformer;
    let mockProductJsonToProductTransformerConvertMultiple;

    beforeEach(() => {
        axiosJsonApiDao = new AxiosJsonApiDao('', null, null);
        productJsonToProductTransformer = new ProductJsonToProductTransformer();

        mockProductJsonToProductTransformer =
            ProductJsonToProductTransformer.mock.instances[0];
        mockProductJsonToProductTransformerConvertMultiple =
            mockProductJsonToProductTransformer.convertMultiple;

        mockProduct1 = new ProductModel({ id: 1, name: 'mock 1' });
        mockProduct2 = new ProductModel({ id: 2, name: 'mock 2' });
    });

    test('should successfully get a list of products', async () => {
        const data = {
            data: [
                {
                    id: 1,
                    name: 'mock 1'
                }
            ]
        };
        const apiResponseDto = new ApiResponseDto(data);

        axiosJsonApiDao.list.mockResolvedValue(apiResponseDto);

        mockProductJsonToProductTransformerConvertMultiple.mockReturnValueOnce([
            mockProduct1,
            mockProduct2
        ]);

        const productRepository = new ProductRepository(
            axiosJsonApiDao,
            productJsonToProductTransformer
        );

        const products = await productRepository.getAll();
        expect(products).not.toBeUndefined();
        expect(products[1]).toBe(mockProduct2);

        expect(
            mockProductJsonToProductTransformerConvertMultiple.mock.calls[0][0]
        ).toEqual(data);

        expect(axiosJsonApiDao.list.mock.calls[0][0]).toBeInstanceOf(
            ListApiRequestDto
        );
    });
});
