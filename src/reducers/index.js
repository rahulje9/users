import { combineReducers } from 'redux'
import RegReducer from './registrationReducer'
import loginReducer from './loginReducer'
import userReducer from './userReducer'
import colorsReducer from './colorsReducer'

const AppReducer = combineReducers({
    RegReducer,
    loginReducer,
    userReducer,
    colorsReducer
})

export default AppReducer