import reducer from './reducers';
import * as types from './types';

describe('Session reducer', () => {
    describe('Fetch request', () => {
        const customer = { name: 'Test' };
        const action = {
            type: types.LOGIN_REQUEST,
            payload: {
                customer
            }
        };

        const initialState = {
            loggingIn: false,
            loggedIn: false,
            customer: null
        };

        const result = reducer(initialState, action);

        test('should set loading flag in the state', () => {
            expect(result.loggingIn).toBeTruthy();
            expect(result.loggedIn).toBeFalsy();
            expect(result.customer).toBe(customer);
        });
    });

    describe('Fetch success', () => {
        const customer = { name: 'Test' };
        const action = {
            type: types.LOGIN_SUCCESS,
            payload: {
                customer
            }
        };

        const initialState = {
            loggingIn: false,
            loggedIn: false,
            customer: null
        };

        const result = reducer(initialState, action);

        test('should set loading flag in the state', () => {
            expect(result.loggingIn).toBeFalsy();
            expect(result.loggedIn).toBeTruthy();
            expect(result.customer).toBe(customer);
        });
    });

    describe('Fetch error', () => {
        const error = { message: 'Test' };
        const action = {
            type: types.LOGIN_FAILURE,
            payload: {
                error
            }
        };

        const initialState = {
            loggingIn: false,
            loggedIn: false,
            customer: null,
            error: null
        };

        const result = reducer(initialState, action);

        test('should set loading flag in the state', () => {
            expect(result.loggingIn).toBeFalsy();
            expect(result.loggedIn).toBeFalsy();
            expect(result.customer).toBeUndefined();
            expect(result.error).toBe(error);
        });
    });
});
