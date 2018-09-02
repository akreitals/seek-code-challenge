// @flow
import AuthService from './AuthService';
import { cookies } from '../utils/session/SessionCookiesFactory';

const authService: AuthService = new AuthService(cookies);

export { authService };
