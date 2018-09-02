// @flow
import { Cookies } from 'react-cookie';
import { SessionInterface } from './SessionInterface';

export default class SessionCookies implements SessionInterface {
    _session: Object;

    constructor() {
        this._session = new Cookies();
    }

    /**
     * @inheritDoc
     */
    getItem(key: string): any {
        return this._session.get(key);
    }

    /**
     * @inheritDoc
     */
    setItem(key: string, value: any): SessionInterface {
        this._session.set(key, value);
        return this;
    }

    /**
     * @inheritDoc
     */
    remove(key: string): SessionInterface {
        this._session.remove(key);
        return this;
    }
}
