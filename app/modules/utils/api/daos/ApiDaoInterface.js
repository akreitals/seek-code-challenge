// @flow
import type ApiResponseDto from '../dtos/ApiResponseDto';
import type GetApiRequestDto from '../dtos/GetApiRequestDto';
import type ListApiRequestDto from '../dtos/ListApiRequestDto';
// import type PostApiRequestDto from '../dtos/methods/PostApiRequestDto';
// import type PatchApiRequestDto from '../dtos/methods/PatchApiRequestDto';
// import type DeleteApiRequestDto from '../dtos/methods/DeleteApiRequestDto';

export interface ApiDaoInterface {
    get(apiRequestDto: GetApiRequestDto): Promise<ApiResponseDto>;

    list(apiRequestDto: ListApiRequestDto): Promise<ApiResponseDto>;

    // post(apiRequestDto: PostApiRequestDto): Promise<ApiResponseDto>;
    //
    // patch(apiRequestDto: PatchApiRequestDto): Promise<ApiResponseDto>;
    //
    // delete(apiRequestDto: DeleteApiRequestDto): Promise<ApiResponseDto>;
}
