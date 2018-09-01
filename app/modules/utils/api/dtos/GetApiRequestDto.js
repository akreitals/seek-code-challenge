// @flow
import AbstractApiRequestDto from './AbstractApiRequestDto';
import { METHODS } from '../ApiConstants';

export default class GetApiRequestDto extends AbstractApiRequestDto {
    constructor(endpoint: string, headers?: { [string]: string } = {}) {
        super(endpoint, METHODS.GET, headers);
    }
}
