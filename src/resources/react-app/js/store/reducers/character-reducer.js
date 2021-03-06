import * as ActionTypes from "../action-types";

const stats = {
    id: 0,
    character_id: 0,
    artisan: 0,
    dexterity: 0,
    fishing: 0,
    health: 0,
    hunting: 0,
    knowledge: 0,
    luck: 0,
    strength: 0,
    theft: 0,
    trade: 0,
    wisdom: 0,
};

const inventory = [{
    id: 0,
    character_id: 0,
    item_id: 0,
    is_equipped_item: false,
    description: {
        id: 0,
        name: null,
        description: null,
        type: null,
        effects: {},
        price: 0,
        available: 0,
        image: null,
    }
}];

const character = {
    id: 0,
    avatar: null,
    character: null,
    experience: 0,
    fatigue: 0,
    gender: null,
    level: 0,
    available_stats: 0,
    lost: 0,
    money: 0,
    next_level: 0,
    nickname: null,
    npc_losses: 0,
    npc_victories: 0,
    points_per_hit: 0,
    stats: stats,
    inventory: inventory,
};

const initialState = {
    character
};

const Character = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case ActionTypes.CHARACTER_CREATE:
            return characterProfile(state, payload);
        case ActionTypes.CHARACTER_UPDATE_STATS:
            return characterProfile(state, payload);
        case ActionTypes.USER_PROFILE:
            return characterProfile(state, payload);
        case ActionTypes.AUTH_LOGOUT:
            return dropData(state);
        default:
            return state;
    }
};

const characterProfile = (state, payload) => {
    const character = payload.character;

    state = Object.assign({}, state, {
        character
    });

    return state;
};

const dropData = (state) => {
    state = Object.assign({}, state, {
        character
    });

    return state;
};

export default Character;
