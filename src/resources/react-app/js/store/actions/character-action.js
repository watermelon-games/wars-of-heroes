import * as ActionTypes from '../action-types';

export function characterProfile(payload) {
    return {
        type: ActionTypes.USER_PROFILE,
        payload
    }
}

export function characterCreate(payload) {
    return {
        type: ActionTypes.USER_PROFILE,
        payload
    }
}

export function characterUpdateStats(payload) {
    return {
        type: ActionTypes.CHARACTER_UPDATE_STATS,
        payload
    }
}
