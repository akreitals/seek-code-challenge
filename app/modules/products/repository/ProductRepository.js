// @flow
import type ProductModel from '../ProductModel';
import type { ApiDaoInterface } from '../../utils/api/daos/ApiDaoInterface';
import type { DataTransformerInterface } from '../../utils/mappers/DataTransformerInterface';
import { ENDPOINTS } from '../ProductConstants';
import ListApiRequestDto from '../../utils/api/dtos/ListApiRequestDto';

export default class ProductRepository {
    _dao: ApiDaoInterface;

    _dataTransformer: DataTransformerInterface;

    constructor(
        dao: ApiDaoInterface,
        dataTransformer: DataTransformerInterface
    ) {
        this._dao = dao;
        this._dataTransformer = dataTransformer;
    }

    async getAll(): Promise<ProductModel> {
        const request = new ListApiRequestDto(ENDPOINTS.LIST);

        const response = await this._dao.list(request);

        return this._dataTransformer.convertMultiple(response.getData());
    }
}
