// @flow
import { SessionInterface } from './SessionInterface';

export default class LocalStorage implements SessionInterface {
    _session: Object;

    _namespace: string;

    constructor(namespace: string) {
        this._session = typeof window !== 'undefined' && window.localStorage;
        this._namespace = namespace;
    }

    getItem(key: string): any {
        return this._session.getItem(key);
    }

    setItem(key: string, value: any): SessionInterface {
        this._session.setItem(key, value);
        return this;
    }

    destroy(): SessionInterface {
        this._session.clear();
        return this;
    }
}
