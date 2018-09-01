// @flow
import ProductJsonToProductTransformer from './ProductJsonToProductTransformer';
import ProductModel from '../ProductModel';

describe('ProductJsonToProductTransformer', () => {
    let mockProductData;

    beforeEach(() => {
        mockProductData = {
            id: '1',
            image: 'http://test.com/product.png',
            name: 'Product 1',
            price: 29999,
            description: 'Test description'
        };
    });

    test('should successfully map a single ProductApiResponse data to a single product model', async () => {
        const productDataToProductTransformer = new ProductJsonToProductTransformer();

        const product = productDataToProductTransformer.convertSingle(
            mockProductData
        );

        expect(product).not.toBeUndefined();
        expect(product).toBeInstanceOf(ProductModel);
        expect(product.id).toEqual('1');
        expect(product.name).toEqual('Product 1');
        expect(product.image).toEqual('http://test.com/product.png');
    });

    test('should successfully map multiple ProductApiResponse data to multiple product models', async () => {
        const productDataToProductTransformer = new ProductJsonToProductTransformer();

        const products = productDataToProductTransformer.convertMultiple([
            mockProductData,
            Object.assign({}, mockProductData, { id: '2', name: 'Product 2' })
        ]);

        expect(products).not.toBeUndefined();
        expect(products).toBeInstanceOf(Array);
        expect(products).toHaveLength(2);

        const product1 = products[0];
        expect(product1).not.toBeUndefined();
        expect(product1).toBeInstanceOf(ProductModel);
        expect(product1.id).toEqual('1');
        expect(product1.name).toEqual('Product 1');
        expect(product1.image).toEqual('http://test.com/product.png');
        expect(product1.price).toEqual(29999);
        expect(product1.description).toEqual('Test description');

        const product2 = products[1];
        expect(product2).not.toBeUndefined();
        expect(product2).toBeInstanceOf(ProductModel);
        expect(product2.id).toEqual('2');
        expect(product2.name).toEqual('Product 2');
        expect(product2.image).toEqual('http://test.com/product.png');
        expect(product2.price).toEqual(29999);
        expect(product2.description).toEqual('Test description');
    });
});
