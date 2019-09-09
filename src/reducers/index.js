import { combineReducers } from 'redux'
import RegReducer from './registrationReducer'
import loginReducer from './loginReducer'
import userReducer from './userReducer'
import colorsReducer from './colorsReducer'
import * as types from '../constants/constants'

const AppReducer = combineReducers({
    RegReducer,
    loginReducer,
    userReducer,
    colorsReducer
})

const rootReducer = (state, action) => {
    if (action.type === types.LOGOUT) {
        state = undefined;
        window.axios.defaults.headers.common['Authorization'] = ''
    }
    return AppReducer(state, action)
}

export default rootReducer