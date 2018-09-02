// @flow
import SessionCookies from './SessionCookies';
import type { SessionInterface } from './SessionInterface';

const cookies: SessionInterface = new SessionCookies();

export { cookies };
