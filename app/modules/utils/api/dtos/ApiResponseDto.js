// @flow
export default class ApiResponseDto {
    _data: Array<any> | any;

    constructor(data: Array<any> | any) {
        this._data = data;
    }

    /**
     * @return {object[]|object}
     */
    getData(): Array<any> | any {
        return this._data;
    }
}
