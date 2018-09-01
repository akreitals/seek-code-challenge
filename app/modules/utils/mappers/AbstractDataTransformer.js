// @flow
import { DataTransformerInterface } from './DataTransformerInterface';

export default class AbstractDataTransformer
    implements DataTransformerInterface {
    convertMultiple(source: Array<any>): Array<any> {
        const mappedData = [];

        source.forEach(data => {
            mappedData.push(this.convertSingle(data));
        });

        return mappedData;
    }

    convertSingle(source: any): any {
        throw new Error(
            `This is an abstract method that needs to be implemented with the source: ${source} argument`
        );
    }
}
