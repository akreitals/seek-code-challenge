// @flow
import type CustomerModel from '../CustomerModel';
import type { ApiDaoInterface } from '../../utils/api/daos/ApiDaoInterface';
import type { DataTransformerInterface } from '../../utils/mappers/DataTransformerInterface';
import { ENDPOINTS } from '../CustomerConstants';
import GetApiRequestDto from '../../utils/api/dtos/GetApiRequestDto';

export default class CustomerRepository {
    _dao: ApiDaoInterface;

    _dataTransformer: DataTransformerInterface;

    constructor(
        dao: ApiDaoInterface,
        dataTransformer: DataTransformerInterface
    ) {
        this._dao = dao;
        this._dataTransformer = dataTransformer;
    }

    async findById(id: string): Promise<CustomerModel> {
        const request = new GetApiRequestDto(ENDPOINTS.GET.replace(':id', id));

        const response = await this._dao.get(request);

        return this._dataTransformer.convertSingle(response.getData());
    }
}
