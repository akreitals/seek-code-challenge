const METHODS = {
    GET: 'get',
    POST: 'post',
    PATCH: 'patch',
    DELETE: 'delete'
};

const API_STATUS_CODES = {
    SUCCESS: 200,
    DUPLICATE: 409,
    FATAL_ERROR: 500
};

export { METHODS, API_STATUS_CODES };
