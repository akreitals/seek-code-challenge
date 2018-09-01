// @flow
export interface DataTransformerInterface {
    convertMultiple(source: Array<any>): Array<any>;

    convertSingle(source: any): any;
}
