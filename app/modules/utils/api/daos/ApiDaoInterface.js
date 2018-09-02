// @flow
import type ApiResponseDto from '../dtos/ApiResponseDto';
import type GetApiRequestDto from '../dtos/GetApiRequestDto';
import type ListApiRequestDto from '../dtos/ListApiRequestDto';

export interface ApiDaoInterface {
    /**
     * Make GET request for single document API
     * @param {GetApiRequestDto} apiRequestDto
     * @return {Promise.<ApiResponseDto>}
     */
    get(apiRequestDto: GetApiRequestDto): Promise<ApiResponseDto>;

    /**
     * Make GET request for collection from API
     * @param {ListApiRequestDto} apiRequestDto
     * @return {Promise.<ApiResponseDto>}
     */
    list(apiRequestDto: ListApiRequestDto): Promise<ApiResponseDto>;
}
