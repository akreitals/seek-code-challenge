// @flow
import { SessionInterface } from '../utils/session/SessionInterface';

const TOKEN = 'user';

export default class AuthService {
    _session: SessionInterface;

    constructor(session: SessionInterface) {
        this._session = session;
    }

    async login(username: string, password: string) {
        // Stub credentials as no API yet
        const credentials = {
            'customer@unilever.com': {
                id: '1',
                password: 'password'
            },
            'customer@apple.com': {
                id: '2',
                password: 'password'
            },
            'customer@nike.com': {
                id: '3',
                password: 'password'
            },
            'customer@ford.com': {
                id: '4',
                password: 'password'
            }
        };

        const auth = credentials[username].password === password ? credentials[username].id : null;

        if (auth) {
            this._session.setItem(TOKEN, { id: auth });
        }

        return { id: auth };
    }

    logout() {
        this._session.remove(TOKEN);
    }

    isAuthenticated() {
        return !!this._session.getItem(TOKEN);
    }
}