// @flow
import AbstractDataTransformer from '../../utils/mappers/AbstractDataTransformer';
import ProductModel from '../ProductModel';
import { ProductApiResponse } from '../ProductApiResponseType';

export default class VoteDataToVoteTransformer extends AbstractDataTransformer {
    convertSingle(source: ProductApiResponse): ProductModel {
        return new ProductModel(source);
    }
}
