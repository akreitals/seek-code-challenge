// @flow
import { SessionInterface } from '../utils/session/SessionInterface';
import CustomerModel from '../customers/CustomerModel';

const TOKEN = 'user';

export default class AuthService {
    _session: SessionInterface;

    constructor(session: SessionInterface) {
        this._session = session;
        this._customer = null;
    }

    /**
     * Login user
     * @param username: String
     * @param password: String
     * @returns {Promise.<{id: String}>}
     */
    async login(username: string, password: string) {
        // Stub credentials as no API yet
        // TODO move to mock API data along with customers
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
            },
            'customer@default.com': {
                id: '5',
                password: 'password'
            }
        };

        const auth =
            credentials[username].password === password
                ? credentials[username].id
                : null;

        if (auth) {
            this._session.setItem(TOKEN, { id: auth });
        }

        return { id: auth };
    }

    /**
     * Log user out
     */
    logout() {
        this._session.remove(TOKEN);
    }

    /**
     * Returns true if user exists in session
     * @returns {boolean}
     */
    isAuthenticated() {
        return !!this._session.getItem(TOKEN);
    }

    /**
     * Set customer
     * @param customer
     */
    setCustomer(customer: CustomerModel): void {
        this._customer = customer;
    }

    /**
     * Get customer
     * @returns {CustomerModel|null}
     */
    getCustomer(): CustomerModel | null {
        return this._customer;
    }
}
