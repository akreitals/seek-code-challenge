// @flow
import { METHODS } from '../ApiConstants';
import AbstractApiRequestDto from './AbstractApiRequestDto';

export default class ListApiRequestDto extends AbstractApiRequestDto {
    constructor(endpoint: string, headers?: { [string]: string } = {}) {
        super(endpoint, METHODS.GET, headers);
    }
}
