import Http from '../http';
import * as action from '../store/actions/character-action';

export function create(data) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('/api/v1/characters/create', data)
                .then(res => {
                    dispatch(action.characterCreate(res.data));
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

export function profile() {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.get('/api/v1/auth/profile')
                .then(res => {
                    dispatch(action.characterProfile(res.data));
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
