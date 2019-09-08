import { combineReducers } from 'redux'
import RegReducer from './registrationReducer'
import loginReducer from './loginReducer'
import userReducer from './userReducer'

const AppReducer = combineReducers({
    RegReducer,
    loginReducer,
    userReducer
})

export default AppReducer