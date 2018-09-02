import reducer from './reducers';
import * as types from './types';

describe('Product reducer', () => {
    describe('Fetch request', () => {
        const action = {
            type: types.FETCH_LIST_REQUEST
        };

        const initialState = {
            products: [],
            error: null,
            loading: false
        };

        const result = reducer(initialState, action);

        test('should set loading flag in the state', () => {
            expect(result.loading).toBeTruthy();
        });
    });

    describe('Fetch success', () => {
        const action = {
            type: types.FETCH_LIST_SUCCESS,
            payload: {
                products: [
                    {
                        id: 1,
                        name: 'Test',
                        description: 'test'
                    }
                ]
            }
        };

        const initialState = {
            products: [],
            error: null,
            loading: false
        };

        const result = reducer(initialState, action);

        test('should set the products in the state', () => {
            expect(result.products[0].id).toBe(1);
            expect(result.products[0].name).toBe('Test');
            expect(result.products[0].description).toBe('test');
        });
    });

    describe('Fetch failure', () => {
        const error = { messsage: 'Test failed' };
        const action = {
            type: types.FETCH_LIST_FAILURE,
            error
        };

        const initialState = {
            products: [],
            error: null,
            loading: false
        };

        const result = reducer(initialState, action);

        test('should set an error in the state', () => {
            expect(result.error).toBe(error);
            expect(result.products).toHaveLength(0);
            expect(result.loading).toBeFalsy();
        });
    });
});
