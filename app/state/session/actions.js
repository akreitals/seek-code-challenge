import * as types from './types';
import * as cartTypes from '../cart/types';
import { customerRepository } from '../../modules/customers/repository/CustomerRespoistoryFactory';
import history from '../history';
import { authService } from '../../modules/auth/AuthServiceFactory';

export const login = (username, password) => {
    const request = (user) => ({ type: types.LOGIN_REQUEST, payload: { user }});
    const success = (user) => ({type: types.LOGIN_SUCCESS, payload: { user }});
    const failure = (error) => ({type: types.LOGIN_FAILURE, payload: { error }});
    const createCart = (discountRules) => ({type: cartTypes.CREATE_CART, payload: { discountRules }})

    return async dispatch => {
        dispatch(request({ username }));

        try {
            const user = await authService.login(username, password);

            if (user) {
                const customer = await customerRepository.findById(user.id);

                dispatch(createCart(customer.discountRules));

                dispatch(success(customer));
                history.push('/');
            } else {
                dispatch(failure({ message: 'User Not Found!' }));
            }
        } catch (error) {
            dispatch(failure({ message: 'User Not Found!' }));
        }
    };
};

export const logout = () => {
    authService.logout();
    history.push('/login');
    return { type: types.LOGOUT };
};

export const initializeSession = () => ({
    type: types.INITIALIZE
});

export const setRedirectAfterLogin = () => ({
    type: types.SET_REDIRECT_AFTER_LOGIN
});
