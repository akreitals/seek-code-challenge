import * as types from './types';
import { createReducer } from '../utils';
import { cookies } from '../../modules/utils/session/SessionCookiesFactory';

/* State shape
{
    loggingIn: bool,
    loggedIn: bool
    user: User
}
*/

const user = cookies.getItem('user');
const initialState = {
    loggingIn: false,
    loggedIn: !user,
    user
};

const sessionReducer = createReducer(initialState)({
    [types.LOGIN_REQUEST]: (state, action) => {
        const { customer } = action.payload;
        return {
            loggingIn: true,
            customer
        };
    },
    [types.LOGIN_SUCCESS]: (state, action) => {
        const { customer } = action.payload;
        return {
            loggedIn: true,
            loggingIn: false,
            customer
        };
    },
    [types.LOGIN_FAILURE]: (state, action) => {
        const { error } = action.payload;
        return {
            loggingIn: false,
            error
        };
    }
});

export default sessionReducer;
