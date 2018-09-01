// @flow
import ApiResponseDto from '../dtos/ApiResponseDto';

type RawApiResponse = {
    data: any
};

export default class ApiResponseToApiResponseDtoTransformer {
    /**
     * @param {RawApiResponse} response
     * @return {ApiResponseDto}
     */
    convertSingle(response: RawApiResponse | any): ApiResponseDto {
        const { data } = response;

        return new ApiResponseDto(data);
    }
}
