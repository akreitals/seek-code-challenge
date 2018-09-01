// @flow
import { ProductApiResponse } from './ProductApiResponseType';

export default class ProductModel {
    id: string;

    name: string;

    price: number;

    image: string;

    description: string;

    constructor(source: ProductApiResponse) {
        this.id = source.id;
        this.name = source.name;
        this.price = source.price;
        this.image = source.image;
        this.description = source.description;
    }
}
