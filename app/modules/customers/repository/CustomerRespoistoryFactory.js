// @flow
import { axiosJsonApiDao } from '../../utils/api/daos/AxiosJsonApiDaoFactory';
import { customerJsonToCustomerTransformer } from '../mappers/CustomerJsonToCustomerTransformerFactory';
import CustomerRepository from './CustomerRepository';

const customerRepository: CustomerRepository = new CustomerRepository(
    axiosJsonApiDao,
    customerJsonToCustomerTransformer
);

export { customerRepository };
