import * as action from '../store/actions/auth-action'
import Http from '../http'

export function login(credentials) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('/api/v1/auth/login', credentials)
                .then(res => {
                    dispatch(action.authLogin(res.data));
                    return resolve();
                })
                .catch(err => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };
                    if (statusCode === 401 || statusCode === 422) {
                        // status 401 means unauthorized
                        // status 422 means unprocessable entity
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    );
}

export function register(credentials) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('/api/v1/auth/register', credentials)
                .then(res => {
                    dispatch(action.authLogin(res.data));
                    return resolve(res.data);
                })
                .catch(err => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };
                    if (statusCode === 422) {
                        Object.values(err.response.data.message).map((value, i) => {
                            data.error = value
                        });

                    } else if (statusCode === 400) {
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}

/** @deprecated */
export function resetPassword(credentials) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('/api/password/email', credentials)
                .then(res => {
                    return resolve(res.data);
                })
                .catch(err => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };
                    if (statusCode === 401 || statusCode === 422) {
                        // status 401 means unauthorized
                        // status 422 means unprocessable entity
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}

/** @deprecated */
export function updatePassword(credentials) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('/api/password/reset', credentials)
                .then(res => {
                    const statusCode = res.data.status;
                    if (statusCode === 202) {
                        const data = {
                            error: res.data.message,
                            statusCode,
                        };
                        return reject(data)
                    }
                    return resolve(res);
                })
                .catch(err => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };
                    if (statusCode === 401 || statusCode === 422) {
                        // status 401 means unauthorized
                        // status 422 means unprocessable entity
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}
