// @flow
import type Axios from 'axios';
import type AbstractApiRequestDto from '../dtos/AbstractApiRequestDto';
import { ApiDaoInterface } from './ApiDaoInterface';
import type GetApiRequestDto from '../dtos/GetApiRequestDto';
import type ListApiRequestDto from '../dtos/ListApiRequestDto';
import type ApiResponseDto from '../dtos/ApiResponseDto';
import type ApiResponseToApiResponseDtoTransformer from '../mappers/ApiResponseToApiResponseDtoTransformer';

export default class AxiosJsonApiDao implements ApiDaoInterface {
    _baseUrl: string;

    _axios: Axios;

    _apiResponseToApiResponseDtoTransformer: ApiResponseToApiResponseDtoTransformer;

    constructor(
        baseUrl: string,
        axios: Axios,
        apiResponseToApiResponseDtoTransformer: ApiResponseToApiResponseDtoTransformer
    ) {
        this._baseUrl = baseUrl;
        this._axios = axios;
        this._apiResponseToApiResponseDtoTransformer = apiResponseToApiResponseDtoTransformer;
    }

    /**
     * @inheritDoc
     */
    async get(apiRequestDto: GetApiRequestDto): Promise<ApiResponseDto> {
        const response = await this._axios({
            method: apiRequestDto.getMethod(),
            url: this._getEndpoint(apiRequestDto)
        });

        return this._apiResponseToApiResponseDtoTransformer.convertSingle(
            response.data
        );
    }

    /**
     * @inheritDoc
     */
    async list(apiRequestDto: ListApiRequestDto): Promise<ApiResponseDto> {
        const response = await this._axios({
            method: apiRequestDto.getMethod(),
            url: this._getEndpoint(apiRequestDto)
        });

        return this._apiResponseToApiResponseDtoTransformer.convertSingle(
            response.data
        );
    }

    /**
     * Build API endpoint
     * @param {AbstractApiRequestDto} apiRequestDto
     * @returns {string}
     * @private
     */
    _getEndpoint(apiRequestDto: AbstractApiRequestDto): string {
        return `${this._baseUrl}${apiRequestDto.getEndpoint()}`;
    }
}
