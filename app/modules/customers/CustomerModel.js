// @flow
import { CustomerApiResponse } from './CustomerApiResponseType';

export default class CustomerModel {
    id: string;

    name: string;

    company: number;

    email: string;

    discountRules: Array;

    constructor(source: CustomerApiResponse) {
        this.id = source.id;
        this.name = source.name;
        this.company = source.company;
        this.email = source.email;
        this.discountRules = source.discountRules;
    }
}
