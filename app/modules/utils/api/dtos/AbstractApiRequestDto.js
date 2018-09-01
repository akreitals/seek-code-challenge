// @flow
export default class AbstractApiRequestDto {
    _endpoint: string;

    _method: string;

    // _headers: { [string]: string } = {};

    constructor(endpoint: string, method: string, headers?: any = {}) {
        this._endpoint = endpoint;
        this._method = method;
        this._headers = headers;
    }

    getEndpoint(): string {
        return this._endpoint;
    }

    getHeaders(): any {
        return this._headers;
    }

    getMethod(): string {
        return this._method;
    }
}
