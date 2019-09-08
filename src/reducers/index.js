import { combineReducers } from 'redux'
import RegReducer from './registrationReducer'
import loginReducer from './loginReducer'

const AppReducer = combineReducers({
    RegReducer,
    loginReducer
})

export default AppReducer