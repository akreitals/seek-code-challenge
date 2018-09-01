// @flow
import axios from 'axios';
import AxiosJsonApiDao from './AxiosJsonApiDao';
import { apiResponseToApiResponseDtoTransformer } from '../mappers/ApiResponseToApiResponseDtoTransformerFactory';
import { BASE_URL } from '../../../../../config/config';

const axiosJsonApiDao = new AxiosJsonApiDao(
    BASE_URL,
    axios.create(),
    apiResponseToApiResponseDtoTransformer
);

export { axiosJsonApiDao };
