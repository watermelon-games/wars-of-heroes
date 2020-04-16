import {combineReducers} from 'redux'
import Auth from './auth-reducer'
import Character from './character-reducer'
import persistStore from './persist-store'

const RootReducer = combineReducers({
    Auth,
    Character,
    persistStore
});

export default RootReducer;
